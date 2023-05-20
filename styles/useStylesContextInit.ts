import { useCallback } from 'react'
import { StylesContextModel } from './StylesContext'
import { useWindowDimensions } from 'react-native'
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
export default function useStylesContextInit(): StylesContextModel {
    const { width, height } = useWindowDimensions()
    const shortDimension = width < height ? width : height
    const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size
    const moderateScale = (size: number, factor = 0.25) =>
        size + (scale(size) - size) * factor
    const spacing = useCallback((num: number) => 8 * num, [])
    const iconSize = useCallback(
        (size: 'small' | 'medium' | 'large' | 'xl' | 'xxl') => {
            return {
                small: 20,
                medium: 36,
                large: 48,
                xl: 96,
                xxl: 128,
            }[size]
        },
        []
    )
    const zIndex = useCallback((role: 'floatingButton' | 'toast') => {
        return {
            floatingButton: 1,
            toast: 1,
        }[role]
    }, [])

    const iconRoundSize = useCallback(
        (size: 'small' | 'medium' | 'large' | 'xl' | 'xxl') =>
            iconSize(size) * 1.5,
        [iconSize]
    )

    const borderRadius = useCallback(
        (size: 'small' | 'medium' | 'large' | 'xl' | 'xxl') =>
            iconRoundSize(size) / 2,
        [iconRoundSize]
    )

    const borderRadiusButton = useCallback(
        (size: 'small' | 'medium' | 'large' | 'xl' | 'xxl') =>
            iconSize(size) / 2,
        [iconSize]
    )

    const fontSize = useCallback(
        (
            kind: 'caption' | 'paragraph' | 'subtitle1' | 'subtitle2' | 'title'
        ) => {
            return {
                caption: moderateScale(8),
                paragraph: moderateScale(16),
                subtitle1: moderateScale(32),
                subtitle2: moderateScale(20),
                title: moderateScale(40),
            }[kind]
        },
        [moderateScale]
    )
    const lineHeight = useCallback(
        (kind: 'caption' | 'paragraph' | 'subtitle1' | 'subtitle2' | 'title') =>
            fontSize(kind) * 1.2,
        [fontSize]
    )
    return {
        spacing,
        iconSize,
        zIndex,
        borderRadius,
        iconRoundSize,
        borderRadiusButton,
        lineHeight,
        fontSize,
    }
}
