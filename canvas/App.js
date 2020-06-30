import React from 'react';
import { View,
  StyleSheet } from 'react-native';
import CanvasScreen from './screens/CanvasScreen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CanvasScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: 40
  }
});

export default App;