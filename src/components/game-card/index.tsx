import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { ImageBackground, Text, TouchableOpacity } from 'react-native'
import { THEME } from '../../theme'
import { GCProps } from '../@interfaces'

import { styles } from './styles'



const GameCard: FC<GCProps> = ({ data, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>

          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default GameCard
