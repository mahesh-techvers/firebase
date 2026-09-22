import messaging from '@react-native-firebase/messaging';

export async function requestPushPermission() {
  await messaging().requestPermission();
  return messaging().getToken();
}

export function listenForForegroundMessages(
  callback: (message: unknown) => void,
) {
  return messaging().onMessage(callback);
}
