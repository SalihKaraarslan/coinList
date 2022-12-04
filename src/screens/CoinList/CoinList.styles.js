import {StyleSheet} from 'react-native';
import {colors} from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  flatlistStyle: {width: '90%'},
  header: {
    marginBottom: 15,
    color: colors.secondary,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    lineHeight: 30,
  },
  renderItemWrapper: {
    backgroundColor: colors.white,
    width: '100%',
    marginVertical: 5,
    borderRadius: 8,
    padding: 10,
  },
  renderItemHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: colors.primary,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
  },
  renderItemTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  renderItemText: {
    color: colors.text,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
    lineHeight: 26,
  },
  renderItemValueWrapper: {
    justifyContent: 'flex-start',
    width: 74,
  },
  renderItemValue: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
    lineHeight: 26,
  },
});
