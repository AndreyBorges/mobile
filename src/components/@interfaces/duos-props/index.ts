import { ColorValue, ModalProps } from 'react-native'

export interface IDuoCard {
  hourEnd: string
  hourStart: string
  id: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

export interface DuoCardProps {
  data: IDuoCard
  onConnect: () => void
}

export interface DuoInfoProps {
  label: string
  value: string
  colorValue?: ColorValue
}

export interface DuoMatchProps extends ModalProps {
  discord: string
  onClose: () => void
}
