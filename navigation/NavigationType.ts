import { NavigationProp } from '@react-navigation/native'

export interface Configuration {
    Login: undefined
    ChatList: undefined
    Register: undefined
    Chat: { id: string }
}
export type NavigationType = NavigationProp<Configuration>
