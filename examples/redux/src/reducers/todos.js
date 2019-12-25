import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const initialState = {
  byIds: {},
  allIds: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;

      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            text,
            completed: false,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todo = state.byIds[id];

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...todo,
            completed: !todo.completed,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}
