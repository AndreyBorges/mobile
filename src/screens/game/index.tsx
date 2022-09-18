import { useNavigation, useRoute } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background, DuoCard, DuoMatch, Header } from '../../components'
import { GameScreenProps } from '../@interface'
import { styles } from './styles'
import { THEME } from '../../theme'
import { logoNlwEsports } from '../../assets'
import { IDuoCard } from '../../components/@interfaces'

const Game: FC = () => {
  const [duos, setDuos] = useState<IDuoCard[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')
  const route = useRoute()
  const navigation = useNavigation()
  const { bannerUrl, id, title } = route.params as GameScreenProps

  const handleGoBack = () => {
    navigation.goBack()
  }

  const getDiscordUser = async (adsID: string) => {
    fetch(`http://192.168.1.8:3333/ads/${adsID}/discord`)
      .then(resp => resp.json())
      .then(data => {
        setDiscordDuoSelected(data.discord)
      })
  }

  useEffect(() => {
    fetch(`http://192.168.1.8:3333/games/${id}/ads`)
      .then(resp => resp.json())
      .then(data => {
        setDuos(data)
      })
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20} />
          </TouchableOpacity>

          <Image source={logoNlwEsports} style={styles.logo} />

          <View style={styles.right} />
        </View>
        <Image source={{ uri: bannerUrl }} style={styles.cover} resizeMode='cover' />
        <Header {...{ title }} subtitle='Conecte-se e comece a jogar!' />
        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          style={styles.containerList}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={duos.length > 0 ? styles.contentList : styles.emptyListContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  )
}

export default Game
