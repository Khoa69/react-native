import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import CategoryList from './components/categoryList'
import { View } from './components/Themed';
import { StyleSheet } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <CategoryList title = "Media" />
        <CategoryList title = "Picture" />
        <CategoryList title = "Shut down" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft:16,
    paddingRight:16
  }
});
