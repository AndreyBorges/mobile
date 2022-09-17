import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { logoNlwEsports } from '../../assets'
import { Header, GameCard, Background } from '../../components'
import { GameCardProps } from '../../components/@interfaces'
import { styles } from './styles'

const Home: FC = () => {
  const [games, setGames] = useState<GameCardProps[]>([])
  const navigation = useNavigation()

  const handleOpenGame = ({ id, title, bannerUrl }: GameCardProps) => {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.1.8:3333/games')
      .then(resp => resp.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoNlwEsports} style={styles.logo} />
        <Header title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...' />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <GameCard onPress={() => handleOpenGame(item)} data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}

export default Home
