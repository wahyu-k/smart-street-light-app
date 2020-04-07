import axios from 'axios';

export const loadData = (req) => {
  return (dispatch) => {
    dispatch({ type: 'LOAD_DATA_START' });
    axios
      .get(
        `https://iot.arduinosolo.com/get_based_user.php?user_id=${req.userId}`,
        { timeout: 10000 },
      )
      .then((response) => {
        dispatch({
          type: 'LOAD_DATA_SUCCESS',
          allData: response.data,
        });
      })
      .catch((error) => {
        console.warn(error);
        alert(error);
      });
  };
};

export const loadLoginData = ({ body }) => {
  return (dispatch) => {
    let formData = new FormData();
    formData.append('username', body.username);
    formData.append('pass', body.password);
    dispatch({ type: 'LOAD_DATA_START' });
    return axios
      .post(`https://iot.arduinosolo.com/login_new.php`, formData, {
        timeout: 10000,
      })
      .then((response) => {
        dispatch({
          type: 'LOAD_LOGIN_DATA_SUCCESS',
          loginData: response.data,
        });
        return response.data;
      })
      .catch((error) => {
        console.warn(error);
        alert(error);
      });
  };
};

export const setIndex = (req) => {
  return (dispatch) => dispatch({ type: 'SET_INDEX', index: req.index });
};

export const setLoginData = (req) => {
  return (dispatch) =>
    dispatch({ type: 'SET_LOGIN_DATA', loginData: req.loginData });
};
