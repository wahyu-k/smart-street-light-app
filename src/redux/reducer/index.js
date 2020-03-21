let initialState = {
  data: {
    device_id: '1',
    id: '0',
    v1: '0',
    v2: '0',
    v3: '0',
    v4: '0',
    v_tot: '0',
    c: '0',
    t: '0',
    date: '0',
    lat: '0',
    lng: '0',
  },
  alldata: [
    {
      index: '1',
      device_id: '0',
      id: '0',
      v1: '0',
      v2: '0',
      v3: '0',
      v4: '0',
      v_tot: '0',
      c: '0',
      t: '0',
      date: '0',
      lat: '0',
      lng: '0',
      name: '0',
    },
  ],
  isLoading: false,
  error: null,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA_START':
      return Object.assign({}, state, {isLoading: true});
    case 'LOAD_DATA_SUCCESS':
      return Object.assign({}, state, {
        data: action.payload,
        isLoading: false,
        alldata: action.alldata,
      });
    case 'LOAD_DATA_FAILURE':
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};
