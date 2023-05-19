import { View } from 'react-native'
import React from 'react'
import useToastContainerPresenter from './useToastContainerPresenter'
import ToastMessage from './ToastMessage/react/ToastMessage'
import useStyles from '../../../../useStyles'

export default function ToastContainer() {
    const { getToasts } = useToastContainerPresenter()
    const styles = useStyles(({ style }) => ({
        view: {
            zIndex: style.zIndex('toast'),
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
    }))

    return (
        <View style={styles.view}>
            {getToasts().map((toast) => (
                <ToastMessage {...toast} />
            ))}
        </View>
    )
}
