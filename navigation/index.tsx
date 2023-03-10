import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import LinkingConfiguration from './LinkingConfiguration'
import StatisticsScreen from '../screens/Statistics/react/StatisticsScreen'
import YourInfoScreen from '../screens/YourInfo/react/YourInfoScreen'
import PingScreen from '../screens/Ping/react/PingScreen'

const Stack = createNativeStackNavigator<any>()

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator initialRouteName="Ping">
                <Stack.Screen
                    name="YourInfo"
                    component={YourInfoScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Ping"
                    component={PingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Statistics"
                    component={StatisticsScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
