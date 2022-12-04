import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './CoinDetail.styles';
import {useCoinContext} from '../../context/CoinContext';
import {useFormik} from 'formik';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CoinsEditSchema, colors, strings} from '../../constant';

const CoinDetail = ({route, navigation}) => {
  const {item} = route.params;
  const {dispatch} = useCoinContext();
  const [editable, setEditable] = useState(false);

  const {handleChange, handleBlur, handleSubmit, values, errors} = useFormik({
    initialValues: {
      depositMaxLimit: item.DepositMaxLimit.toString(),
      depositMinLimit: item.DepositMinLimit.toString(),
      withdrawMaxLimit: item.WithdrawMaxLimit.toString(),
      withdrawMinLimit: item.WithdrawMinLimit.toString(),
    },
    validationSchema: CoinsEditSchema,
    validateOnBlur: true,
    onSubmit: () => {
      setEditable(false);
      dispatch({
        type: 'EDIT_COIN',
        payload: {
          ...item,
          DepositMaxLimit: Number(values.depositMaxLimit),
          DepositMinLimit: Number(values.depositMinLimit),
          WithdrawMaxLimit: Number(values.withdrawMaxLimit),
          WithdrawMinLimit: Number(values.withdrawMinLimit),
        },
      });
      navigation.goBack();
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{strings.coinDetail} </Text>
      <View style={styles.renderItemWrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <Ionicon name={'arrow-back'} size={24} color={colors.primary} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{item.Code}</Text>
          </View>
        </View>
        <View style={styles.detailWrapper}>
          <View>
            <Text style={styles.renderItemText}>{strings.depositMaxLimit}</Text>
            <Text style={styles.renderItemText}>{strings.depositMinLimit}</Text>
            <Text style={styles.renderItemText}>
              {strings.withdrawMaxLimit}
            </Text>
            <Text style={styles.renderItemText}>
              {strings.withdrawMinLimit}
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('depositMaxLimit')}
                onBlur={handleBlur('depositMaxLimit')}
                value={values.depositMaxLimit}
                keyboardType="numeric"
                editable={editable}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('depositMinLimit')}
                onBlur={handleBlur('depositMinLimit')}
                value={values.depositMinLimit}
                keyboardType="numeric"
                editable={editable}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('withdrawMaxLimit')}
                onBlur={handleBlur('withdrawMaxLimit')}
                value={values.withdrawMaxLimit}
                keyboardType="numeric"
                editable={editable}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('withdrawMinLimit')}
                onBlur={handleBlur('withdrawMinLimit')}
                value={values.withdrawMinLimit}
                keyboardType="numeric"
                editable={editable}
              />
            </View>
          </View>
        </View>
        <View>
          {!editable ? (
            <MaterialCommunityIcons
              onPress={() => setEditable(!editable)}
              style={styles.editIcon}
              name={'square-edit-outline'}
              size={30}
              color={colors.primary}
            />
          ) : (
            <MaterialCommunityIcons
              onPress={handleSubmit}
              style={styles.editIcon}
              name={'sticker-check-outline'}
              size={30}
              color={colors.primary}
            />
          )}
        </View>
        {errors && (
          <View style={styles.errorWrapper}>
            {errors.depositMinLimit && (
              <Text style={styles.errorMessage}>{errors.depositMinLimit}</Text>
            )}
            {errors.depositMaxLimit && (
              <Text style={styles.errorMessage}>{errors.depositMaxLimit}</Text>
            )}
            {errors.withdrawMaxLimit && (
              <Text style={styles.errorMessage}>{errors.withdrawMaxLimit}</Text>
            )}
            {errors.withdrawMinLimit && (
              <Text style={styles.errorMessage}>{errors.withdrawMinLimit}</Text>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CoinDetail;
