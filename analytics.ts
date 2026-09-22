import analytics from '@react-native-firebase/analytics';

export function logScreen(screenName: string) {
  return analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName,
  });
}

export function logEvent(
  name: string,
  params?: Record<string, string | number>,
) {
  return analytics().logEvent(name, params);
}
