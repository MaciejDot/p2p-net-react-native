import { useNavigation as _useNavigation } from '@react-navigation/native'
import { NavigationType } from './NavigationType'

export default function useNavigation() {
    return _useNavigation<NavigationType>()
}
