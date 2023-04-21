import RegisterContext from './context/RegisterContext'
import useRegisterContextInit from './context/useRegisterContextInit'
import Password from './password/react/Password'
import { Card } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'
import Username from './username/react/Username'
import RegisterButton from './registerButton/react/RegisterButton'
import LoginInstead from './loginInstead/react/LoginInstead'
import RepeatPassword from './repeatPassword/react/RepeatPassword'
import RegisterAvatar from './registerAvatar/react/RegisterAvatar'

export default function LoginScreen() {
    const value = useRegisterContextInit()
    return (
        <RegisterContext.Provider value={value}>
            <View style={styles.container}>
                <Card containerStyle={styles.card}>
                    <RegisterAvatar />
                    <Username />
                    <Password />
                    <RepeatPassword />
                    <RegisterButton />
                    <LoginInstead />
                </Card>
            </View>
        </RegisterContext.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    card: {
        paddingBottom: 24,
        paddingTop: 24,
    },
})
