import {
  ADD_1,
  MINUS_1,
  CUBE_ADD,
  CUBE_MINUS,
  GET_USER,
  SORT_NAME,
  SORT_ZIP
} from "../constants/consts.js";

export const counterReducer = (state, action) => {
  let stateCopy = [...state];

  switch (action.type) {
    case ADD_1:
      stateCopy += 1;
      break;
    case MINUS_1:
      stateCopy -= 1;
      break;
    case CUBE_ADD:
      if (action.payload) {
        let cnt = action.payload;
        console.log(action.payload);
        while (cnt > 0) {
          cnt -= 1;
          stateCopy.push(0);
        }
      } else stateCopy.push(0);
      console.log("cube count: ", stateCopy.length);
      break;
    case CUBE_MINUS:
      if (stateCopy.length > 0) {
        stateCopy.pop();
      }
      break;
    default:
      break;
  }
  return stateCopy;
};

export const getUserReducer = (state, action) => {
  let stateCopy = [...state];
  switch (action.type) {
    case GET_USER:
      console.log("get red");
      stateCopy = action.payload;
      break;
    case SORT_NAME:
      action.payload==="asc"? stateCopy.sort((a, b) => (a.name > b.name ? 1 : -1)) : stateCopy.sort((a, b) => (b.name > a.name ? 1 : -1))
      break;
    case SORT_ZIP:
      action.payload === "asc"
        ? stateCopy.sort((a, b) => (a.address.zipcode > b.address.zipcode ? 1 : -1))
        : stateCopy.sort((a, b) => (b.address.zipcode > a.address.zipcode ? 1 : -1));
    default:
      break;
  }
  return stateCopy;
};
