import { StatusBar, Text } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Background, Loading } from './src/components'
import { Routes } from './src/routes'
const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <Background>
      <StatusBar barStyle='light-content' backgroundColor='trasparent' translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  )
}

export default App
