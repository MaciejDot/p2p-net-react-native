import { Card, Text } from '@rneui/themed'
import useMessagePresenter from './useMessagePresenter'
import useStyles from '../../../../../../../useStyles'

export default function Message() {
    const { getContent, isFromCurrentUser, isWriting } = useMessagePresenter()

    const styles = useStyles(({ style }) => ({
        isRightCard: {
            borderRadius: style.borderRadius('small'),
            width: '80%',
            alignSelf: 'flex-end',
        },
        isLeftCard: {
            borderRadius: style.borderRadius('small'),
            width: '80%',
        },
        content: {
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
    }))
    if (isWriting()) return <></>
    if (isFromCurrentUser())
        return (
            <Card containerStyle={styles.isLeftCard}>
                <Text style={styles.content}>{getContent()}</Text>
            </Card>
        )
    return (
        <Card containerStyle={styles.isRightCard}>
            <Text style={styles.content}>{getContent()}</Text>
        </Card>
    )
}
