import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {FontFamily} from '../../constants/constantStyles';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.BORDER_COLOR,
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    height: 20,
    width: 20,
  },
  text: {
    paddingLeft: 20,
    fontFamily: FontFamily.Roboto_Regular,
  },
  checked: {
    textDecorationLine: 'line-through',
    color: colors.TEXT_GRAY,
  },
  deleteBox: {
    backgroundColor: colors.RED_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderRadius: 10,
  },
});
