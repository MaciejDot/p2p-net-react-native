/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

const linking: LinkingOptions<any> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            Statistics: 'statistics',
            YourInfo: 'yourInfo',
            Ping: 'ping',
        },
    },
}

export default linking
