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
import useStyles from '../../../useStyles'

export default function LoginScreen() {
    const value = useRegisterContextInit()
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
        <RegisterContext.Provider value={value}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <RegisterAvatar />
                    <Username />
                    <Password />
                    <RepeatPassword />
                    <RegisterButton />
                    <LoginInstead />
                </View>
            </View>
        </RegisterContext.Provider>
    )
}
