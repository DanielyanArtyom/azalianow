import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {FontFamily} from '../../constants/constantStyles';

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.BORDER_COLOR,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  disabled: {
    backgroundColor: 'rgba(34, 47, 62, 0.5)',
  },
  text: {
    color: '#fff',
    fontFamily: FontFamily.Roboto_Regular,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 28,
  },
});
