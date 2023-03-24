import { Button } from '@rneui/themed'
import useLoginButtonPresenter from './useLoginButtonPresenter'
import React from 'react'

export default function LoginButton() {
    const { getLabel, onPress, isLoading, isDisabled } =
        useLoginButtonPresenter()
    if (isLoading()) return <Button disabled loading />
    return (
        <Button onPress={onPress} disabled={isDisabled()}>
            {getLabel()}
        </Button>
    )
}
