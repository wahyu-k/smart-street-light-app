import axios from 'axios';

export const loadData = (userId, data) => {
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_DATA_START'});
    axios
      .get('http://iot.arduinosolo.com/get_based_user.php?user_id=' + userId)
      .then(function(response) {
        dispatch({
          type: 'LOAD_DATA_SUCCESS',
          payload: response.data[data],
          alldata: response.data,
        });
      })
      .catch(function(error) {
        dispatch({type: 'LOAD_DATA_FAILURE', payload: error});
      });
  };
};
