import { FC } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

const Loading: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  )
}

export default Loading
