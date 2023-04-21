import { Button } from '@rneui/themed'
import useRegisterButtonPresenter from './useRegisterButtonPresenter'
import React from 'react'

export default function RegisterButton() {
    const { getLabel, onPress, isLoading, isDisabled } =
        useRegisterButtonPresenter()
    if (isLoading()) return <Button disabled loading />
    return (
        <Button onPress={onPress} disabled={isDisabled()}>
            {getLabel()}
        </Button>
    )
}
