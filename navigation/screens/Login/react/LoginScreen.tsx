import LoginContext from './context/LoginContext'
import useLoginContextInit from './context/useLoginContextInit'
import LoginAvatar from './loginAvatar/react/LoginAvatar'
import Password from './password/react/Password'
import { Card } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'
import Username from './username/react/Username'
import LoginButton from './loginButton/react/LoginButton'
import CreateNewAccount from './createNewAccount/react/CreateNewAccount'
import useStyles from '../../../../useStyles'

export default function LoginScreen() {
    const value = useLoginContextInit()
    const styles = useStyles(({ style }) => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
        },
        card: {
            paddingBottom: style.spacing(3),
            paddingTop: style.spacing(3),
            paddingLeft: style.spacing(3),
            paddingRight: style.spacing(3),
        },
    }))
    return (
        <LoginContext.Provider value={value}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <LoginAvatar />
                    <Username />
                    <Password />
                    <LoginButton />
                    <CreateNewAccount />
                </View>
            </View>
        </LoginContext.Provider>
    )
}
