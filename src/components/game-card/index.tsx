import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { ImageBackground, Text, TouchableOpacity } from 'react-native'
import { THEME } from '../../theme'
import { GCProps } from '../@interfaces'

import { styles } from './styles'

const GameCard: FC<GCProps> = ({ data, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>

          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default GameCard
