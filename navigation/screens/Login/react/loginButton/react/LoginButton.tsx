import { Button } from '@rneui/themed'
import useLoginButtonPresenter from './useLoginButtonPresenter'
import React from 'react'
import useStyles from '../../../../../../useStyles'

export default function LoginButton() {
    const { getLabel, onPress, isLoading, isDisabled } =
        useLoginButtonPresenter()
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
                buttonStyle={styles.button}
                containerStyle={styles.container}
                disabled
                loading
                size="lg"
            />
        )
    return (
        <Button
            buttonStyle={styles.button}
            onPress={onPress}
            disabled={isDisabled()}
            size="lg"
            containerStyle={styles.container}
        >
            {getLabel()}
        </Button>
    )
}
