import useNavigation from '../../../../../useNavigation'
import useLoginContext from '../../useLoginContext'
import CreateNewAccountPresenter from '../presenters/CreateNewAccountPresenter'

export default function useCreateNewAccountPresenter() {
    return CreateNewAccountPresenter(useLoginContext(), useNavigation())
}
