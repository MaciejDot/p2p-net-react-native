import ChatListItem from './models/ChatListItem'
import PingingLog from './models/PingingLog'

// fixture
const masterService = {
    address: {
        getLocalIPs() {
            return [
                {
                    address: '127.0.0.1',
                    port: 22349,
                },
                {
                    address: '198.0.0.1',
                    port: 22349,
                },
                {
                    address: '255.34.34.21',
                    port: 22349,
                },
            ]
        },
        getLoggedUserId() {
            return '023uiw8we8f32hb398wfw8eh38r8fwdhebnro8fvw8e89f22n309w9fjf' // base 16
        },
        getPeerId() {
            return 'aidjwidioiwidijawidoj1owopdjoifeuegueweopjfnwopeifpwnefio' // base 16
        },
        getPingAddress() {
            return 'd06a904f45584c8bb5544564a624bdd0733f471f37f44b19a63988bca946ac0e2d234c52940c4ae49ef84f26399d4659'
        },
    },
    pingTools: {
        startPinging(address: string): 'VALID' | 'INVALID' {
            return 'VALID' as const
        },
        isCurrentlyPinging() {
            return false
        },
        getCurrentPing() {
            return 'abcs'
        },
        onPingingLog(listener: (log: PingingLog) => void) {
            return null
        },
        stopPinging() {
            return null
        },
    },
    statistics: {
        getConnectedPeers() {
            return [
                {
                    ip: '127.0.0.1',
                    port: 16000,
                    ping: Math.floor(Math.random() * 20),
                },
                {
                    ip: '147.0.0.1',
                    port: 16000,
                    ping: Math.floor(Math.random() * 20),
                },
                {
                    ip: '137.0.0.1',
                    port: 16000,
                    ping: Math.floor(Math.random() * 20),
                },
                ...new Array(Math.floor(Math.random() * 8)).fill({
                    ip: '137.0.0.1',
                    port: 16000,
                    ping: Math.floor(Math.random() * 20),
                }),
            ]
        },
        getConnectedServers() {
            return [
                {
                    ip: '127.0.0.2',
                    port: 16000,
                    ping: Math.floor(Math.random() * 20),
                },
            ]
        },
    },
    login: {
        isUserLoggedIn() {
            return true
        },
        registerUser(username: string, password: string): Promise<void> {
            return new Promise((resolve) => setTimeout(resolve, 2000))
        },
        logInUser(username: string, password: string): Promise<void> {
            return new Promise((resolve, reject) => setTimeout(reject, 2000))
        },
    },
    chatList: {
        getChatList(): ChatListItem[] {
            return [
                {
                    name: 'Socota',
                    id: '95da9c6eb3b0482e9231072f41ec59c',
                    lastMessage: 'Hey, when can we meet again? :)',
                    wasRead: false,
                    date: '2023-08-09T12:51:45.090Z',
                },
                {
                    name: 'Random1',
                    id: '12da9c6eb3b0482e9231072f41ec59c',
                    lastMessage: 'What?',
                    wasRead: true,
                    date: '2023-07-21T12:51:45.090Z',
                },
                {
                    name: 'NotMyName',
                    id: '92da9c6eb3b0482e9231072f41ec59c',
                    lastMessage: 'Green',
                    wasRead: false,
                    date: '2023-06-01T12:51:45.090Z',
                },
                {
                    name: 'Sebastian',
                    id: '95da3c6eb3b0482e9231072f41ec59c',
                    lastMessage: 'Maybe next time',
                    wasRead: true,
                    date: '2023-05-22T12:51:45.090Z',
                },
                {
                    name: 'Loki',
                    id: '95da9c6eb3b0432e9231072f41ec59c',
                    lastMessage: 'Bye',
                    wasRead: true,
                    date: '2023-04-21T12:51:45.090Z',
                },
                {
                    name: 'Asoka',
                    id: '95da9c6eb3b0483e9231072f41ec59c',
                    lastMessage: 'I did what u asked for',
                    wasRead: true,
                    date: '2023-03-21T12:51:45.090Z',
                },
                {
                    name: 'Naomi',
                    id: '95da9c6eb3b0482e9231072341ec59c',
                    lastMessage: 'Yes, i think that too',
                    wasRead: true,
                    date: '2022-05-21T12:51:45.090Z',
                },
            ]
        },
    },
}
export default masterService
