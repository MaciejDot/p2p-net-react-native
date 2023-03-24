import { Button } from '@rneui/themed'
import useCreateNewAccountPresenter from './useCreateNewAccountPresenter'
import React from 'react'
import { StyleSheet } from 'react-native'
export default function CreateNewAccount() {
    const { getText, onPress, isDisabled } = useCreateNewAccountPresenter()
    return (
        <Button
            onPress={onPress}
            disabled={isDisabled()}
            containerStyle={styles.button}
        >
            {getText()}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        color: 'green',
    },
})
