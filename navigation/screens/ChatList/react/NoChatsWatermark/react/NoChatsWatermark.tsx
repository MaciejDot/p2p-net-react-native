import { Text } from '@rneui/themed'
import useStyles from '../../../../../../useStyles'
import { View } from 'react-native'
import useNoChatsWatermarkPresenter from './useNoChatsWatermarkPresenter'

export default function NoChatsWatermark() {
    const styles = useStyles(({ style, theme }) => ({
        view: {
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90%',
        },
        title: {
            fontSize: style.fontSize('subtitle2'),
            lineHeight: style.lineHeight('subtitle2'),
            color: theme.colors.grey5,
        },
        caption: {
            marginTop: style.spacing(2),
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
            color: theme.colors.grey5,
        },
    }))
    const { getExplanations, getTitle } = useNoChatsWatermarkPresenter()

    return (
        <View style={styles.view}>
            <Text style={styles.title}>{getTitle()}</Text>
            <Text style={styles.caption}>{getExplanations()}</Text>
        </View>
    )
}
