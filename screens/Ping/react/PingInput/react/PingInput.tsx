import { Card, Input, Button } from '@rneui/themed'
import React from 'react'
import usePingInputPresenter from './usePingInputPresenter'

export default function PingInput() {
    const {
        getValue,
        onChange,
        getLabel,
        getErrorText,
        onPingClick,
        getPingButtonText,
        isDisabled,
        onStopPinging,
        getStopPingingText,
    } = usePingInputPresenter()

    if (isDisabled()) {
        return (
            <Card>
                <Input label={getLabel()} value={getValue()} disabled />
                <Button onPress={onStopPinging}>{getStopPingingText()}</Button>
            </Card>
        )
    }

    return (
        <Card>
            <Input
                label={getLabel()}
                value={getValue()}
                onChangeText={onChange}
                errorMessage={getErrorText()}
            />
            <Button onPress={onPingClick}>{getPingButtonText()}</Button>
        </Card>
    )
}
