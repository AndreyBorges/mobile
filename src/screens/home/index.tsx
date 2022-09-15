import { FC } from 'react'
import { FlatList, Image, View } from 'react-native'
import { logoNlwEsports } from '../../assets'
import { Header, GameCard } from '../../components'
import { GAMES } from '../../utils/games'

import { styles } from './styles'

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logoNlwEsports} style={styles.logo} />
      <Header title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...' />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}

      />
    </View>
  )
}

export default Home
