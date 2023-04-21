import { Button } from '@rneui/themed'
import useLoginInsteadPresenter from './useLoginInsteadPresenter'
import React from 'react'
import { StyleSheet } from 'react-native'
export default function LoginInstead() {
    const { getText, onPress, isDisabled } = useLoginInsteadPresenter()
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
