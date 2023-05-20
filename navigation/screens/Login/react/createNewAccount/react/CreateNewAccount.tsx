import { Button } from '@rneui/themed'
import useCreateNewAccountPresenter from './useCreateNewAccountPresenter'
import React from 'react'
import { StyleSheet } from 'react-native'
import useStyles from '../../../../../../useStyles'
export default function CreateNewAccount() {
    const { getText, onPress, isDisabled } = useCreateNewAccountPresenter()
    const styles = useStyles(({ style }) => ({
        button: { borderRadius: style.borderRadiusButton('large') },
        container: {
            marginTop: style.spacing(3),
            borderRadius: style.borderRadiusButton('large'),
        },
    }))
    return (
        <Button
            onPress={onPress}
            disabled={isDisabled()}
            containerStyle={styles.container}
            buttonStyle={styles.button}
            size="lg"
            color="secondary"
            type="clear"
        >
            {getText()}
        </Button>
    )
}
