const FETCH_ID = 'fruitsfetch/fruits/FETCH_ID';
const initialState = {};

export const getCryptoId = (id) => ({
  type: FETCH_ID,
  id,
});

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ID:
      return action.id;
    default: return state;
  }
};

export default detailsReducer;
