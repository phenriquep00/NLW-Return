import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';
import Widget from './src/components/Widget';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import 'react-native-gesture-handler';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: 10

    }}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Widget />

    </View>
  );
}


