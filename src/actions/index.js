import projects from '../apis/projects';
import { SIGN_IN, SIGN_OUT, FETCH_PROJECTS } from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchProjects = () => async dispatch => {
  const response = await projects.get('/projects');

  dispatch({ type: FETCH_PROJECTS, payload: response.data });
};
