import usePingContext from '../../usePingContext'
import PingLogPresenter from '../presenters/PingLogPresenter'

export default function usePingLogPresenter() {
    return PingLogPresenter(usePingContext())
}
