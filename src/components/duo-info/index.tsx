import { View, Text } from 'react-native'
import { FC } from 'react'
import { styles } from './styles'
import { DuoInfoProps } from '../@interfaces'
import { THEME } from '../../theme'

const DuoInfo: FC<DuoInfoProps> = ({ label, value, colorValue = THEME.COLORS.TEXT }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.value, { color: colorValue }]}
        numberOfLines={1}
      >{value}</Text>
    </View>
  )
}

export default DuoInfo
