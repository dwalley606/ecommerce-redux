import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../actions/categoryActions";

const initialState = {
  categories: [],
  currentCategory: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    default:
      return state;
  }
};
