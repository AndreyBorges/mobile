import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import React, { FC, useState } from 'react'
import { Modal, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native'
import { THEME } from '../../theme'
import { DuoMatchProps } from '../@interfaces'
import Header from '../header'
import { styles } from './styles'
import * as Clipboard from 'expo-clipboard'

const DuoMatch: FC<DuoMatchProps> = ({ discord, onClose, ...rest }) => {
  const [isCopping, setIsCopping] = useState(false)

  const handleCopyDiscordToClipboard = async () => {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert(
      'Discord Copiado!',
      'Agora pode encontrar o seu duo no discord.'
    )
    setIsCopping(false)
  }

  return (
    <Modal transparent statusBarTranslucent {...rest} animationType='fade'>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight='bold' />

          <Header
            title="Let's Play!"
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
          >
            <Text style={styles.discord}>{isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default DuoMatch
