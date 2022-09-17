import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'

export interface GameCardProps {
  id: string
  title: string
  _count: {
    ads: number
  }
  bannerUrl: string
}

export interface GCProps extends TouchableOpacityProps {
  data: GameCardProps
}
