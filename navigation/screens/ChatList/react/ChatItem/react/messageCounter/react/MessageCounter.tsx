import { Chip } from '@rneui/themed'
import React from 'react'
import useMessageCounterPresenter from './useMessageCounterPresenter'
import useStyles from '../../../../../../../../useStyles'
export default function MessageCounter() {
    const { getCounter, showCounter } = useMessageCounterPresenter()
    const styles = useStyles(({ style }) => ({
        chip: {
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
    }))
    if (showCounter())
        return <Chip title={getCounter()} titleStyle={styles.chip} />
    return null
}
