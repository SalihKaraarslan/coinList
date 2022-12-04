import * as Yup from 'yup';

export const CoinsEditSchema = () => {
  return Yup.object().shape({
    depositMaxLimit: Yup.string()
      .required('Please enter a value')
      .matches(/^\d+(\.\d+)?$/, 'Please enter a valid number'),
    depositMinLimit: Yup.string()
      .required('Please enter a value')
      .matches(/^\d+(\.\d+)?$/, 'Please enter a valid number'),
    withdrawMaxLimit: Yup.string()
      .required('Please enter a value')
      .matches(/^\d+(\.\d+)?$/, 'Please enter a valid number'),
    withdrawMinLimit: Yup.string()
      .required('Please enter a value')
      .matches(/^\d+(\.\d+)?$/, 'Please enter a valid number'),
  });
};

export const strings = {
  coinList: 'Coin List',
  coinDetail: 'Coin Detail',
  depositMaxLimit: 'Deposit Max Limit',
  depositMinLimit: 'Deposit Min Limit',
  withdrawMaxLimit: 'Withdraw Max Limit',
  withdrawMinLimit: 'Withdraw Min Limit',
};

export const colors = {
  backgroundColor: '#edf3fb',
  primary: '#3b5998',
  secondary: '#4a90e2',
  warning: '#f76b61',
  white: '#fff',
  text: '#6b7a99',
};
