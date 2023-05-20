import { Icon, Input } from '@rneui/themed'
import React from 'react'
import usePasswordPresenter from './usePasswordPresenter'
import useStylesContext from '../../../../../../useStylesContext'
export default function Password() {
    const {
        getLabel,
        getValue,
        onChange,
        onVisibilityIconPress,
        getIcon,
        isSecureTextEntry,
        isDisabled,
    } = usePasswordPresenter()
    const { iconSize } = useStylesContext()

    return (
        <Input
            label={getLabel()}
            value={getValue()}
            onChangeText={onChange}
            textContentType="password"
            autoCorrect={false}
            autoComplete="password"
            secureTextEntry={isSecureTextEntry()}
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
