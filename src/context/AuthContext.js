import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token:action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ( { email, username, birth, gender, password}, navigation ) => {
    try {
      const response = await trackerApi.post('/signup', {email, username, birth, gender, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
      // console.log(response.data);
    }
    catch (err) {
      dispatch({ type: 'add_error', payload: 'Logowanie nie powiodło się'});
    }
};


const signin = (dispatch) => {
  return ( { email, password } ) => {

  };
};

const signout = (dispatch) => {
  return () => {

  };
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout},
  { token: null, errorMessage: ' ' }
);

