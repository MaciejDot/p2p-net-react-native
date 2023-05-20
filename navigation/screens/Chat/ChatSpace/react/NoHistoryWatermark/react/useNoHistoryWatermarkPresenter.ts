import useLocale from '../../../../../../../useLocale'
import NoHistoryWatermarkPresenter from '../presenters/NoHistoryWatermarkPresenter'

export default function useNoHistoryWatermark() {
    return NoHistoryWatermarkPresenter(useLocale())
}
