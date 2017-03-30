import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fef2e4',
  },
  halfPageButton: {
    width: 300,
    height: 100,
    margin: 25,
    overflow:'hidden',
    borderRadius:4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapBox: {
    width: 300,
    height: 300,
    margin: 25,
    overflow:'hidden',
    borderRadius:4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBackground: {
    backgroundColor: '#fef2e4',
  },
  greenBackground: {
    backgroundColor: '#376565',
  },
  white: {
    color: '#fef2e4',
    fontSize: 30,
  },
  green: {
    color: '#376565',
    fontSize: 30,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'yellow',
  }
});

export default styles

// colors
// off-white: #fef2e4
// onion orange: #fd974f
// red pepper red: #C60000
// driftwood brown: #805a3b
// blue: #919CA1
// purple: #9FA1AF
// pretty grey: #9FA1AF'
