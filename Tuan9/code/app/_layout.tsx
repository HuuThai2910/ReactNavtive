import { Stack } from "expo-router";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
export default function RootLayout() {
  return <SafeAreaProvider><Stack screenOptions={{headerShown: false}}/></SafeAreaProvider>;
}
