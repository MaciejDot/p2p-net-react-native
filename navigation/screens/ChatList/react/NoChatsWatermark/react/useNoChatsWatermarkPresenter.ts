import useLocale from '../../../../../../useLocale'
import NoChatsWatermarkPresenter from '../presenters/NoChatsWatermarkPresenter'

export default function useNoChatsWatermarkPresenter() {
    return NoChatsWatermarkPresenter(useLocale())
}
