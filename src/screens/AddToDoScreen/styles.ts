import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {FontFamily} from '../../constants/constantStyles';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
  },
  text: {
    marginLeft: 30,
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: 28,
    lineHeight: 33,
    color: colors.TEXT_GRAY,
  },
  actions: {flex: 1, justifyContent: 'center'},
});
