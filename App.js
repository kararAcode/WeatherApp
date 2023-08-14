import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeroSection from './src/components/HeroSection';
import { LinearGradient } from 'expo-linear-gradient';
import HourBar from './src/components/HourBar';
import DayList from './src/components/DayList';

function App() {
  return (
    <LinearGradient colors={['#048fff', '#88f7f9']} style={styles.container}>
      <View>
        <HeroSection />
        <HourBar />
        <DayList />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;