import {
  ADD_1,
  MINUS_1,
  CUBE_ADD,
  CUBE_MINUS,
  GET_USER,
  SORT_NAME,
  SORT_ZIP,
} from "../constants/consts.js";

export const addFunc = () => {
  return {
    type: ADD_1,
  };
};

export const minusFunc = () => {
  return {
    type: MINUS_1,
  };
};

export const cubeAdd = (num) => {
  return {
    type: CUBE_ADD,
    payload: num,
  };
};
export const cubeMinus = () => {
  return {
    type: CUBE_MINUS,
  };
};
export const getUser = (users) => {
  console.log("getuser action");
  console.log(users);
  return {
    type: GET_USER,
    payload: users,
  };
};
export const sortName = (type) => {
  return {
    type: SORT_NAME,
    payload: type,
  };
};

export const sortZip = (a) => {
  return {
    type: SORT_ZIP,
    payload: a
  };
};
