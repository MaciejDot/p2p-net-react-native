import { View } from 'react-native'
import React from 'react'
import { Icon, Input } from '@rneui/themed'
import useChatInputPresenter from './useChatInputPresenter'
import useStylesContext from '../../../../../useStylesContext'
import useStyles from '../../../../../useStyles'
export default function ChatInput() {
    const { getPlaceholder } = useChatInputPresenter()
    const { iconSize } = useStylesContext()
    const styles = useStyles(({ style, theme }) => ({
        input: {
            fontSize: style.fontSize('paragraph'),
            lineHeight: style.lineHeight('paragraph'),
        },
        view: {
            backgroundColor: theme.colors.primary,
            paddingLeft: style.spacing(1),
            paddingRight: style.spacing(1),
        },
    }))
    return (
        <View style={styles.view}>
            <Input
                style={styles.input}
                placeholder={getPlaceholder()}
                //value={getValue()}
                //onChangeText={onChange}
                autoCorrect={true}
                multiline
                rightIcon={
                    <Icon
                        name="send"
                        type="material"
                        size={iconSize('small')}
                        //onPress={onVisibilityIconPress}
                    />
                }
            />
        </View>
    )
}
