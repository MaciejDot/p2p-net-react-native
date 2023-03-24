import ToastModel from '../../../../../models/ToastModel'

export default function ToastMessagePresenter({ message }: ToastModel) {
    return {
        getMessage() {
            return message
        },
    }
}
