import {
  ADD_1,
  MINUS_1,
  CUBE_ADD,
  CUBE_MINUS,
  GET_USER,
  DESC,
  ASC,
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
export const sortAsc = (type) => {
  return {
    type: ASC,
    payload: type,
  };
};
export const sortDesc = (type) => {
  return {
    type: DESC,
    payload: type,
  };
};
export const sortZip = () => {
  return {
    type: a,
  };
};
