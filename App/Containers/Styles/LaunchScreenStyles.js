import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  imageStyle: {
    width: 35,
    height: 35,
    margin: 5
  },
  touchableStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
    borderWidth: 0.3,
    borderColor: 'black',
    padding: 3
  },
  header: {
    flex: 1,
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
})
