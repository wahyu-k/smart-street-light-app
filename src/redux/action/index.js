import axios from 'axios';

export const loadData = req => {
  return dispatch => {
    dispatch({type: 'LOAD_DATA_START'});
    axios
      .get(
        `http://iot.arduinosolo.com/get_based_user.php?user_id=${req.userId}`,
        {timeout: 10000},
      )
      .then(response => {
        dispatch({
          type: 'LOAD_DATA_SUCCESS',
          allData: response.data,
        });
      })
      .catch(error => {
        console.log(error);
        alert(error);
        dispatch({type: 'LOAD_DATA_FAILURE'});
      });
  };
};

export const setIndex = req => {
  return dispatch => dispatch({type: 'SET_INDEX', index: req.index});
};
