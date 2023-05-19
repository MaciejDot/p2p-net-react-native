import useLocale from '../../../../../../../../useLocale'
import useChatItemContext from '../../useChatItemContext'
import DatePresenter from '../presenters/DatePresenter'

export default function useDatePresenter() {
    return DatePresenter(useChatItemContext(), useLocale().locale)
}
