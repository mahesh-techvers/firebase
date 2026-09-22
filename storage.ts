import storage from '@react-native-firebase/storage';

export async function uploadFile(localPath: string, remotePath: string) {
  const reference = storage().ref(remotePath);
  await reference.putFile(localPath);
  return reference.getDownloadURL();
}
