import { Icon, Input } from '@rneui/themed'
import React from 'react'
import usePasswordPresenter from './usePasswordPresenter'
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

    return (
        <Input
            label={getLabel()}
            value={getValue()}
            onChangeText={onChange}
            textContentType="password"
            autoCorrect={false}
            secureTextEntry={isSecureTextEntry()}
            disabled={isDisabled()}
            rightIcon={
                <Icon
                    name={getIcon()}
                    type="material"
                    size={20}
                    onPress={onVisibilityIconPress}
                />
            }
        />
    )
}
