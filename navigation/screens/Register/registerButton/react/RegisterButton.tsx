import { Button } from '@rneui/themed'
import useRegisterButtonPresenter from './useRegisterButtonPresenter'
import React from 'react'
import useStyles from '../../../../../useStyles'

export default function RegisterButton() {
    const { getLabel, onPress, isLoading, isDisabled } =
        useRegisterButtonPresenter()
    const styles = useStyles(({ style }) => ({
        button: { borderRadius: style.borderRadiusButton('large') },
        container: {
            marginTop: style.spacing(3),
            borderRadius: style.borderRadiusButton('large'),
        },
    }))
    if (isLoading())
        return (
            <Button
                disabled
                loading
                buttonStyle={styles.button}
                size="lg"
                containerStyle={styles.container}
            />
        )
    return (
        <Button
            onPress={onPress}
            disabled={isDisabled()}
            buttonStyle={styles.button}
            size="lg"
            containerStyle={styles.container}
        >
            {getLabel()}
        </Button>
    )
}
