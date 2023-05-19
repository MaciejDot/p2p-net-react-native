import { useMemo } from 'react'
import { StylesContextModel } from './styles/StylesContext'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { useTheme } from '@rneui/themed'
import useStylesContext from './useStylesContext'
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }
export default function useStyles<T>(
    creator: (props: {
        style: StylesContextModel
        theme: ReturnType<typeof useTheme>['theme']
    }) => NamedStyles<T>
) {
    const style = useStylesContext()
    const { theme } = useTheme()
    return useMemo(() => {
        return StyleSheet.create(creator({ style, theme }))
    }, [style, theme, creator])
}
