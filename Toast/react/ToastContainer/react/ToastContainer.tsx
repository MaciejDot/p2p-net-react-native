import { StyleSheet, View } from 'react-native'
import React from 'react'
import useToastContainerPresenter from './useToastContainerPresenter'
import ToastMessage from './ToastMessage/react/ToastMessage'

export default function ToastContainer() {
    const { getToasts } = useToastContainerPresenter()

    return (
        <View style={styles.view}>
            {getToasts().map((toast) => (
                <ToastMessage {...toast} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        zIndex: 3000,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
})
