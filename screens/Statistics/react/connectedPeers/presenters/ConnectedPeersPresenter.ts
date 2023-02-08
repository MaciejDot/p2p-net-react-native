export default function ConnectedPeersPresenter({
    peers,
}: {
    peers: { port: number; ip: string; ping: number }[]
}) {
    return {
        getPeers() {
            return peers.map((peer, key) => ({
                ...peer,
                ping: `${peer.ping}ms`,
                key,
            }))
        },
        getTitle() {
            return 'Connected peers:'
        },
        getIpTitle() {
            return 'Ip'
        },
        getPortTitle() {
            return 'Port'
        },
        getPingTitle() {
            return 'Ping'
        },
    }
}
