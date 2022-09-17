import { View, Text, TouchableOpacity } from 'react-native'
import { FC } from 'react'
import { styles } from './styles'
import { DuoInfo } from '../'
import { DuoCardProps } from '../@interfaces'
import { THEME } from '../../theme'
import { GameController } from 'phosphor-react-native'

const DuoCard: FC<DuoCardProps> = ({data:{hourEnd,hourStart,name,useVoiceChannel,weekDays,yearsPlaying},onConnect}) => {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={name} />
      <DuoInfo label='Tempo de Jogo' value={`${yearsPlaying} anos`} />
      <DuoInfo
        label='Disponibilidade'
        value={`${weekDays.length} dias \u2022 ${hourStart} - ${hourEnd}`}
      />
      <DuoInfo
        label='Chamada de áudio'
        value={useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />

        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DuoCard
