import { Text } from '@rneui/themed'
import React from 'react'
import useDatePresenter from './useDatePresenter'
import useStyles from '../../../../../../../../useStyles'
export default function DateElement() {
    const { getDate } = useDatePresenter()
    const styles = useStyles(({ style }) => ({
        date: {
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
    }))
    return <Text style={styles.date}>{getDate()}</Text>
}
