import useToastContext from '../../../../useToastContext'
import ToastContainerPresenter from '../presenters/ToastContainerPresenter'

export default function useToastContainerPresenter() {
    return ToastContainerPresenter(useToastContext())
}
