import { LocaleContextModel } from '../../../../../../Locale'

export default function ConnectedServersPresenter(
    {
        servers,
    }: {
        servers: { ip: string; port: number; ping: number }[]
    },
    { translate }: LocaleContextModel
) {
    return {
        getServers() {
            return servers.map((server, key) => ({
                ...server,
                ping: `${server.ping}ms`,
                key,
            }))
        },
        getTitle() {
            return translate('Connected servers')
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
