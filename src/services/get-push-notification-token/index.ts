import * as Notifications from 'expo-notifications'

const getPushNotificationToken = async () => {
  const { granted } = await Notifications.getPermissionsAsync()

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync()
    console.log('Notification Token =>', pushToken.data)
    return pushToken.data
  } else await Notifications.requestPermissionsAsync()
}

export default getPushNotificationToken
