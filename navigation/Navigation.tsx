import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import StatisticsScreen from './screens/Statistics/react/StatisticsScreen'
import YourInfoScreen from './screens/YourInfo/react/YourInfoScreen'
import PingScreen from './screens/Ping/react/PingScreen'
import { useTheme } from '@rneui/themed'
import LoginScreen from './screens/Login/react/LoginScreen'
import RegisterScreen from './screens/Register/RegisterScreen'
import ChatListScreen from './screens/ChatList/react/ChatListScreen'
import { View } from 'react-native'
import useStylesContext from '../useStylesContext'

const Stack = createNativeStackNavigator<any>()

export default function Navigation() {
    const { theme } = useTheme()
    const { fontSize } = useStylesContext()
    return (
        <NavigationContainer
            theme={theme.mode === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: fontSize('subtitle2'),
                    },
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ChatList"
                    component={ChatListScreen}
                    options={{
                        title: 'Chats',
                        headerShown: true,
                        headerLeft: () => <View />,
                    }}
                />
                <Stack.Screen
                    name="YourInfo"
                    component={YourInfoScreen}
                    options={{ title: 'Your Info' }}
                />
                <Stack.Screen
                    name="Ping"
                    component={PingScreen}
                    options={{ title: 'Ping' }}
                />
                <Stack.Screen
                    name="Statistics"
                    component={StatisticsScreen}
                    options={{ title: 'Statistics' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
