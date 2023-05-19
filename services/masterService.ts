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
                    lastMessage:
                        'Hey, when can we meet again? :) very long text message to see overflow of it again and again lorem ipsum deli cos tam cos tam',
                    date: '2023-05-19T12:51:45.090Z',
                    unreadNumber: 1,
                },
                {
                    name: 'Random1',
                    id: '12da9c6eb3b0482e9231072f41ec59c',
                    lastMessage: 'What?',
                    date: '2023-05-11T12:51:45.090Z',
                    unreadNumber: 0,
                },
                {
                    name: 'NotMyName',
                    id: '92da9c6eb3b0482e9231072f41ec59c',
                    lastMessage:
                        'Green very long text message to see overflow of it again and again',
                    date: '2022-06-01T12:51:45.090Z',
                    unreadNumber: 21,
                },
                {
                    name: 'Sebastian',
                    id: '95da3c6eb3b0482e9231072f41ec59c',
                    lastMessage: 'Maybe next time',
                    date: '2022-05-22T12:51:45.090Z',
                    unreadNumber: 0,
                },
                {
                    name: 'Loki',
                    id: '95da9c6eb3b0432e9231072f41ec59c',
                    lastMessage: 'Bye',
                    date: '2022-04-21T12:51:45.090Z',
                    unreadNumber: 0,
                },
                {
                    name: 'Asoka',
                    id: '95da9c6eb3b0483e9231072f41ec59c',
                    lastMessage: 'I did what u asked for',
                    date: '2022-03-21T12:51:45.090Z',
                    unreadNumber: 0,
                },
                {
                    name: 'VeryLongUSernameUnbelivable',
                    id: '95da9c6edb3b0482e9231072341ec59c',
                    lastMessage: 'Yes, i think that too',
                    date: '2021-05-21T12:51:45.090Z',
                    unreadNumber: 0,
                },
                {
                    name: 'werwr',
                    id: '95dad9c6eb3b0482e9231072341ec59c',
                    lastMessage: 'Yes, i think that too',
                    date: '2021-05-21T12:51:45.090Z',
                    unreadNumber: 0,
                },
                {
                    name: 'vsddsvd',
                    id: '9d5da9c6ebd3b0482e9231072341ec59c',
                    lastMessage: 'Yes, i think that too',
                    date: '2021-05-21T12:51:45.090Z',
                    unreadNumber: 0,
                },
                {
                    name: 'dsvdsvds',
                    id: '95da9c6deb3b0482e9231072341ec59c',
                    lastMessage: 'Yes, i think that too',
                    date: '2021-05-21T12:51:45.090Z',
                    unreadNumber: 0,
                },
            ]
        },
    },
}
export default masterService
