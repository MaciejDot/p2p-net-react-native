import { Card, Input, Button } from '@rneui/themed'
import React from 'react'
import usePingInputPresenter from './usePingInputPresenter'
import useStyles from '../../../../../../useStyles'

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

    const styles = useStyles(({ style }) => ({
        buttonContainer: {
            borderRadius: style.borderRadiusButton('large'),
        },
        card: {
            borderRadius: style.borderRadius('small'),
        },
    }))

    if (isDisabled()) {
        return (
            <Card containerStyle={styles.card}>
                <Input label={getLabel()} value={getValue()} disabled />
                <Button
                    size="lg"
                    containerStyle={styles.buttonContainer}
                    onPress={onStopPinging}
                >
                    {getStopPingingText()}
                </Button>
            </Card>
        )
    }

    return (
        <Card containerStyle={styles.card}>
            <Input
                label={getLabel()}
                value={getValue()}
                onChangeText={onChange}
                errorMessage={getErrorText()}
            />
            <Button
                size="lg"
                containerStyle={styles.buttonContainer}
                onPress={onPingClick}
            >
                {getPingButtonText()}
            </Button>
        </Card>
    )
}
