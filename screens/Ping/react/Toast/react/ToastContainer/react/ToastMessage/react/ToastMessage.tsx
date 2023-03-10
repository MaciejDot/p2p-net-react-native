import { Card, Text } from '@rneui/themed'
import React from 'react'
import ToastModel from '../../../../../models/ToastModel'
import useToastMessagePresenter from './useToastMessagePresenter'

export default function ToastMessage(props: ToastModel) {
    const { getMessage } = useToastMessagePresenter(props)

    return (
        <Card>
            <Text>{getMessage()}</Text>
        </Card>
    )
}
