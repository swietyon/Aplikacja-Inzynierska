import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as RootNavigation from "../navigation/RootNavigation";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { token: action.payload, errorMessage: ""};
    case "signup":
      return { token: action.payload, errorMessage: ""};
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  console.log(token);
  if (token) {
    dispatch({ type: "signin", payload: token });
    RootNavigation.navigate("DrawerScreen", token);
  } else {
    RootNavigation.navigate("AuthStackScreen");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ email, username, birth, gender, password}) => {
  try {
    const response = await trackerApi.post("/signup", { email, username, birth, gender, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    const user = response.data.user;
    console.log(user);
    RootNavigation.navigate('DrawerScreen', response.data.token);
  }  
  catch (err) {
      dispatch({
        type: "add_error",
        payload: "Wystąpił błąd przy rejestracji. Spróbuj zmienić adres email",
      });
  }
  
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
      const user = response.data.user;
      console.log(user);
      RootNavigation.navigate('DrawerScreen', user);
  } 
  catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Wystąpił błąd przy logowaniu",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  RootNavigation.navigate("AuthStackScreen");
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin},
  { token: null, errorMessage: "" }
);