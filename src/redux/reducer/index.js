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
  allData: [
    {
      index: '0',
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
  index: 0,
  isLoading: false,
  error: null,
  userId: 1,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA_START':
      return {...state, isLoading: true};
    case 'LOAD_DATA_SUCCESS':
      return {...state, isLoading: false, allData: action.allData};
    case 'LOAD_DATA_FAILURE':
      return {...state, isLoading: false};
    case 'SET_INDEX':
      return {...state, index: action.index};
    default:
      return state;
  }
};
