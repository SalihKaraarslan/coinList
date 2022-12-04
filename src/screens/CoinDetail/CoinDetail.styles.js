import {StyleSheet} from 'react-native';
import {colors} from '../../constant';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.backgroundColor},
  renderItemWrapper: {
    backgroundColor: colors.white,
    width: '100%',
    marginVertical: 5,
    borderRadius: 8,
    padding: 10,
  },
  header: {
    marginBottom: 15,
    color: colors.secondary,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    lineHeight: 30,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  backIcon: {
    position: 'absolute',
    left: 10,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  renderItemText: {
    color: colors.text,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
    lineHeight: 26,
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  renderItemValue: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
    lineHeight: 26,
  },
  inputWrapper: {
    width: 72,
  },
  input: {
    height: 26,
    padding: 0,
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
  },
  editIcon: {
    marginVertical: 15,
    textAlign: 'center',
  },
  errorWrapper: {
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: colors.warning,
  },
});
