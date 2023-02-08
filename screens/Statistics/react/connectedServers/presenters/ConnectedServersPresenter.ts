export default function ConnectedServersPresenter({
    servers,
}: {
    servers: { ip: string; port: number; ping: number }[]
}) {
    return {
        getServers() {
            return servers.map((server, key) => ({
                ...server,
                ping: `${server.ping}ms`,
                key,
            }))
        },
        getTitle() {
            return 'Connected servers:'
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
