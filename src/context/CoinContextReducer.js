const CoinContextReducer = (state, action) => {
  switch (action.type) {
    case 'GET_COINS':
      return {
        ...state,
        coins: action.payload,
      };
    case 'DELETE_COIN':
      return {
        ...state,
        coins: state.coins.filter(coin => coin.Id !== action.payload),
      };
    case 'EDIT_COIN':
      return {
        ...state,
        coins: state.coins.map(coin =>
          coin.Id === action.payload.Id ? action.payload : coin,
        ),
      };

    default:
      return state;
  }
};

export default CoinContextReducer;
