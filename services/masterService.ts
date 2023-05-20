import { ChatEvent, ChatSendEvent } from './models/ChatEvent'
import ChatListItem from './models/ChatListItem'
import PingingLog from './models/PingingLog'
import SingleChatItem from './models/SingleChatItem'

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
    chat: {
        async getChatMessages(
            id: string,
            pageIndex: number,
            pageSize: number
        ): Promise<SingleChatItem[]> {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return [
                {
                    date: '2023-05-20T10:30:00Z',
                    content: 'Hello!',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:29:00Z',
                    content: 'Hi there!',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:28:00Z',
                    content: 'How are you?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:27:00Z',
                    content: "I'm doing well, thanks!",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:26:00Z',
                    content: "That's great!",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:25:00Z',
                    content: 'What have you been up to?',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:24:00Z',
                    content: 'Just working on some projects. How about you?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:23:00Z',
                    content:
                        "I've been busy with school. Final exams are coming up.",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:22:00Z',
                    content: "Good luck with your exams! You'll do great!",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:21:00Z',
                    content: 'Thanks! I appreciate your support.',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:20:00Z',
                    content:
                        'No problem! Let me know if you need any help studying.',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:19:00Z',
                    content: "That's very kind of you. I'll keep that in mind.",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:18:00Z',
                    content:
                        'Hey, have you watched the new movie that came out?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:17:00Z',
                    content: "Not yet. I'm planning to watch it this weekend.",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:16:00Z',
                    content: "It's really good. You'll enjoy it!",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:15:00Z',
                    content:
                        "I can't wait to see it. Thanks for the recommendation!",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:14:00Z',
                    content:
                        "You're welcome! Let me know your thoughts after you watch it.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:13:00Z',
                    content:
                        "Sure, I'll definitely share my thoughts with you.",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:12:00Z',
                    content:
                        'By the way, have you tried the new restaurant in town?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:11:00Z',
                    content: 'Not yet. Is it any good?',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:10:00Z',
                    content:
                        'Yes, the food is delicious and the ambiance is great!',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:09:00Z',
                    content:
                        "I'll definitely check it out then. Thanks for the recommendation!",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:08:00Z',
                    content: "You're welcome! Let me know how you like it.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:07:00Z',
                    content: "Sure, I'll share my experience with you.",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:06:00Z',
                    content: 'Hey, do you want to hang out this weekend?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:05:00Z',
                    content:
                        'Sorry, I have plans this weekend. Maybe next time?',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:04:00Z',
                    content: "No problem. Let's plan for next weekend then.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:03:00Z',
                    content: "Sounds good! I'll keep my schedule open.",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:02:00Z',
                    content: 'Hey, have you heard about the upcoming concert?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T10:01:00Z',
                    content:
                        'Yes, I have! I already bought tickets. Are you going too?',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T10:00:00Z',
                    content: "Definitely! I'm excited to see the performance.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:59:00Z',
                    content: "It's going to be an amazing show!",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:58:00Z',
                    content: 'Hey, did you see the new update for the app?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:57:00Z',
                    content: 'Yes, I did! The new features look fantastic.',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:56:00Z',
                    content:
                        "I'm glad you like them. We worked hard on the improvements.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:55:00Z',
                    content: 'Well, it definitely paid off. Great job!',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:54:00Z',
                    content: 'Thank you! We appreciate your positive feedback.',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:53:00Z',
                    content: 'Hey, do you have any plans for the weekend?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:52:00Z',
                    content: 'Not yet. Why? Do you have something in mind?',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:51:00Z',
                    content:
                        'I was thinking of going hiking. Would you like to join?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:50:00Z',
                    content: "That sounds like a great idea! I'm in!",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:49:00Z',
                    content: "Awesome! Let's plan the details later.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:48:00Z',
                    content: 'Sure, looking forward to it!',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:47:00Z',
                    content:
                        'Hey, have you read the latest book by your favorite author?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:46:00Z',
                    content:
                        "Not yet. I'm planning to get it soon. Is it good?",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:45:00Z',
                    content:
                        "It's amazing! You'll love it. The story is captivating.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:44:00Z',
                    content:
                        "I can't wait to start reading it then. Thanks for the recommendation!",
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:43:00Z',
                    content:
                        "You're welcome! Let's discuss it once you finish.",
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:42:00Z',
                    content:
                        'Hey, have you seen the latest episode of that TV series?',
                    isFromCurrentUser: true,
                },
                {
                    date: '2023-05-20T09:41:00Z',
                    content: 'Yes, I watched it last night. It was intense!',
                    isFromCurrentUser: false,
                },
                {
                    date: '2023-05-20T09:40:00Z',
                    content:
                        "I can't wait to catch up on it. No spoilers, please!",
                    isFromCurrentUser: true,
                },
            ]
        },
        assignChatAsRead(id: string) {
            /*noop*/
        },
        addOnChatMessageListener(
            id: string,
            listener: (event: ChatEvent) => void
        ) {},
        removeOnChatMessageListenr(
            id: string,
            listener: (event: ChatEvent) => void
        ) {},
        sendEvent(id: string, event: ChatSendEvent) {},
    },
}
export default masterService
