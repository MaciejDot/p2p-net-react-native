import useLocale from '../useLocale'
import NavigationPresenter from './presenters/NavigationPresenter'

export default function useNavigationPresenter() {
    return NavigationPresenter(useLocale())
}
