import crashlytics from '@react-native-firebase/crashlytics';

export function reportError(error: Error) {
  crashlytics().recordError(error);
}

export function setUserIdentifier(userId: string) {
  crashlytics().setUserId(userId);
}
