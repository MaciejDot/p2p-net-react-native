import LoginContext from './context/LoginContext'
import useLoginContextInit from './context/useLoginContextInit'
import LoginAvatar from './loginAvatar/react/LoginAvatar'
import Password from './password/react/Password'
import { Card } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'
import Username from './username/react/Username'
import LoginButton from './loginButton/react/LoginButton'
import CreateNewAccount from './createNewAccount/react/CreateNewAccount'

export default function LoginScreen() {
    const value = useLoginContextInit()
    return (
        <LoginContext.Provider value={value}>
            <View style={styles.container}>
                <Card containerStyle={styles.card}>
                    <LoginAvatar />
                    <Username />
                    <Password />
                    <LoginButton />
                    <CreateNewAccount />
                </Card>
            </View>
        </LoginContext.Provider>
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
