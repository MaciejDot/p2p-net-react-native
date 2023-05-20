import { LocaleContextModel } from '../../../../../../Locale'

export default function ConnectedPeersPresenter(
    {
        peers,
    }: {
        peers: { port: number; ip: string; ping: number }[]
    },
    { translate }: LocaleContextModel
) {
    return {
        getPeers() {
            return peers.map((peer, key) => ({
                ...peer,
                ping: `${peer.ping}ms`,
                key,
            }))
        },
        getTitle() {
            return translate('Connected peers')
        },
        getIpTitle() {
            return translate('Ip')
        },
        getPortTitle() {
            return translate('Port')
        },
        getPingTitle() {
            return translate('Ping')
        },
    }
}
