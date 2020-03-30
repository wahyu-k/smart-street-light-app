import axios from 'axios';

export const loadData = (userId, data) => {
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_DATA_START'});
    console.log('start axios');

    axios
      .get('http://iot.arduinosolo.com/get_based_user.php?user_id=' + userId)
      .then(function(response) {
        dispatch({
          type: 'LOAD_DATA_SUCCESS',
          payload: response.data[data],
          allData: response.data,
          index: data,
        });
      })
      .catch(function(error) {
        dispatch({type: 'LOAD_DATA_FAILURE', payload: error});
      });
  };
};

export const loadData2 = req => {
  return dispatch => {
    dispatch({type: 'LOAD_DATA_START'});
    axios
      .get(
        `http://iot.arduinosolo.com/get_based_user.php?user_id=${req.userId}`,
      )
      .then(response => {
        dispatch({
          type: 'LOAD_DATA_SUCCESS',
          allData: response.data,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({type: 'LOAD_DATA_FAILURE'});
      });
  };
};

export const setIndex = req => {
  return dispatch => dispatch({type: 'SET_INDEX', index: req.index});
};
