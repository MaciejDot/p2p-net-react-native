import { createContext } from 'react'

export interface StylesContextModel {
    spacing: (value: number) => number
    iconSize: (size: 'small' | 'medium' | 'large' | 'xl' | 'xxl') => number
    zIndex: (role: 'floatingButton' | 'toast') => number
    borderRadius: (size: 'small' | 'medium' | 'large' | 'xl' | 'xxl') => number
    iconRoundSize: (size: 'small' | 'medium' | 'large' | 'xl' | 'xxl') => number
    borderRadiusButton: (
        size: 'small' | 'medium' | 'large' | 'xl' | 'xxl'
    ) => number
    fontSize: (
        kind: 'caption' | 'paragraph' | 'subtitle1' | 'subtitle2' | 'title'
    ) => number
    lineHeight: (
        kind: 'caption' | 'paragraph' | 'subtitle1' | 'subtitle2' | 'title'
    ) => number
}

const StylesContext = createContext<StylesContextModel | null>(null)

export default StylesContext
