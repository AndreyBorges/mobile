import { StatusBar, Text } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Background, Loading } from './src/components'
import { Home } from './src/screens'
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
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  )
}

export default App
