import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerNabvar}>
        <View style={styles.nabvar}>A</View>
        <View style={styles.containerBoxes1}>
          <View style={styles.containerB}>B</View>
          <View style={styles.containerC}>C</View>
          <View style={styles.containerD}>D</View>
        </View>
        <View style={styles.containerBoxes2}>
          <View style={styles.containerE}>E</View>
          <View style={styles.containerF}>F</View>
          <View style={styles.containerG}>G</View>
        </View>
        <View style={styles.containerEnd}>H</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },

  containerNabvar: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    textAlign: 'center',
  },

  nabvar: {
    backgroundColor: 'cyan',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerBoxes1: {
    backgroundColor: '#76fabe',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '25%',
  },

  containerB: {
    backgroundColor: 'purple',
    width: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerC: {
    backgroundColor: '#ff00b2',
    width: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerD: {
    backgroundColor: '#ff3c3c',
    width: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerBoxes2: {
    backgroundColor: '#76fabe',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '25%',
  },

  containerE: {
    backgroundColor: '#7c00ff',
    width: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerF: {
    backgroundColor: 'orange',
    width: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerG: {
    backgroundColor: 'yellow',
    width: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerEnd: {
    backgroundColor: 'green',
    marginTop: 30,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
