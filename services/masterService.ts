// fixture
const masterService = {
    address: {
        getLocalIPs() {
            return [
                {
                    address: '127.0.0.1',
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
    },
    statistics: {},
}
export default masterService
