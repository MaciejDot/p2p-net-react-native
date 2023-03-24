import { Input } from '@rneui/themed'
import React from 'react'
import useUsernamePresenter from './useUsernamePresenter'
export default function Username() {
    const { getLabel, getValue, onChange, isDisabled } = useUsernamePresenter()
    return (
        <Input
            label={getLabel()}
            value={getValue()}
            onChangeText={onChange}
            textContentType="username"
            disabled={isDisabled()}
            autoCorrect={false}
        />
    )
}
