import ToastModel from '../../../../../models/ToastModel'
import ToastMessagePresenter from '../presenters/ToastMessagePresenter'

export default function useToastMessagePresenter(toast: ToastModel) {
    return ToastMessagePresenter(toast)
}
