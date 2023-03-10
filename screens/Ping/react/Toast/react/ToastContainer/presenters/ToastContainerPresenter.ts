import { ToastContextModel } from '../../ToastContext'

export default function ToastContainerPresenter({
    getToasts,
}: ToastContextModel) {
    return {
        getToasts() {
            return getToasts().map((toast) => ({ ...toast, key: toast.id }))
        },
    }
}
