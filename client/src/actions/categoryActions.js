export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

// Action creators
export const updateCategories = (categories) => ({
  type: UPDATE_CATEGORIES,
  categories,
});

export const updateCurrentCategory = (currentCategory) => ({
  type: UPDATE_CURRENT_CATEGORY,
  currentCategory,
});
