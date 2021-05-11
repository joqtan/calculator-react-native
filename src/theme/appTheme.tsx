import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculatorContainer: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 15,
  },
  resultSm: {
    color: 'rgba(255,255,255,.4)',
    fontSize: 40,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: '#fff',
    fontWeight: '400',
  },
  gray: {backgroundColor: '#9b9b9b'},
  darkGray: {backgroundColor: '#2d2d2d'},
  orange: {backgroundColor: '#ff9427'},
});
