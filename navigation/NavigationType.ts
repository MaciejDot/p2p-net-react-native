import { NavigationProp } from '@react-navigation/native'

export interface Configuration {
    Login: undefined
    Home: undefined
    Register: undefined
}
export type NavigationType = NavigationProp<Configuration>
