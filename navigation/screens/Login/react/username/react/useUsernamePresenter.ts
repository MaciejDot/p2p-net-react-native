import useLoginContext from '../../useLoginContext'
import UsernamePresenter from '../presenters/UsernamePresenter'

export default function useUsernamePresenter() {
    return UsernamePresenter(useLoginContext())
}
