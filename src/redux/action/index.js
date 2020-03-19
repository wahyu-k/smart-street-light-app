import axios from 'axios';

export const loadData = devId => {
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_DATA_START'});
    axios
      .get('http://iot.arduinosolo.com/json_data.php?device_id=' + devId)
      .then(function(response) {
        // console.log(response);
        dispatch({type: 'LOAD_DATA_SUCCESS', payload: response.data});
      })
      .catch(function(error) {
        dispatch({type: 'LOAD_DATA_FAILURE', payload: error});
      });
  };
};
