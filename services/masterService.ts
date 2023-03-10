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
}
export default masterService
