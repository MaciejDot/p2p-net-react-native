import useRegisterContext from '../../useRegisterContext'
import UsernamePresenter from '../presenters/UsernamePresenter'

export default function useUsernamePresenter() {
    return UsernamePresenter(useRegisterContext())
}
