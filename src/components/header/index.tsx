import { FC } from 'react'
import { View, Text, ViewProps } from 'react-native'
import { HeaderProps } from '../@interfaces'

import { styles } from './styles'



const Header: FC<HeaderProps> = ({ subtitle, title, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header
