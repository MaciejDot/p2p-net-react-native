import { Icon, Input } from '@rneui/themed'
import React from 'react'
import useRepeatPasswordPresenter from './useRepeatPasswordPresenter'
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

    return (
        <Input
            label={getLabel()}
            value={getValue()}
            onChangeText={onChange}
            textContentType="password"
            autoCorrect={false}
            errorMessage={getErrorText()}
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
