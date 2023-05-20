import { Icon, Input } from '@rneui/themed'
import React from 'react'
import useRepeatPasswordPresenter from './useRepeatPasswordPresenter'
import useStylesContext from '../../../../../useStylesContext'
export default function RepeatPassword() {
    const {
        getLabel,
        getValue,
        onChange,
        onVisibilityIconPress,
        getIcon,
        isSecureTextEntry,
        isDisabled,
        getErrorText,
    } = useRepeatPasswordPresenter()
    const { iconSize } = useStylesContext()
    return (
        <Input
            label={getLabel()}
            value={getValue()}
            onChangeText={onChange}
            textContentType="password"
            autoCorrect={false}
            errorMessage={getErrorText()}
            secureTextEntry={isSecureTextEntry()}
            autoComplete="password-new"
            disabled={isDisabled()}
            rightIcon={
                <Icon
                    name={getIcon()}
                    type="material"
                    size={iconSize('small')}
                    onPress={onVisibilityIconPress}
                />
            }
        />
    )
}
