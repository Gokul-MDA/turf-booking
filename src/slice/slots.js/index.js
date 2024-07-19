import {
  FETCH_SLOTS_REQUEST,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAILURE,
} from "actions/slots";

const initialState = {
  loading: false,
  slots: [],
  error: null,
};

const slotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SLOTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SLOTS_SUCCESS:
      return { ...state, loading: false, slots: action.slots };
    case FETCH_SLOTS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default slotsReducer;
