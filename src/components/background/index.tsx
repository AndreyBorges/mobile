import { FC, ReactNode } from 'react'
import { ImageBackground } from 'react-native'
import { backgroundGalaxy } from '../../assets'
import { styles } from './styles'

interface Props {
  children: ReactNode
}

const Background: FC<Props> = ({ children }) => {
  return (
    <ImageBackground
      source={backgroundGalaxy}
      style={styles.container}
      defaultSource={backgroundGalaxy}
    >
      {children}
    </ImageBackground>
  )
}

export default Background
