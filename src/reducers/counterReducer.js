import {
  ADD_1,
  MINUS_1,
  CUBE_ADD,
  CUBE_MINUS,
  GET_USER,
  ASC,
  DESC,
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
  console.log("user red");
  switch (action.type) {
    case GET_USER:
      console.log("get red");
      stateCopy = action.payload;
      break;
    case ASC:
      stateCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case DESC:
      stateCopy.sort((a, b) => (b.name > a.name ? 1 : -1));
      break;
    case ZIP:
      action.payload === "asc"
        ? stateCopy.sort((a, b) => (a.name > b.name ? 1 : -1))
        : stateCopy.sort((a, b) => (b.name > a.name ? 1 : -1));
    default:
      break;
  }
  return stateCopy;
};
