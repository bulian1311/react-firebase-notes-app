import * as types from '../actions/types';

const initState = {
  projects: [
    { id: 1, title: 'qwerty', content: 'adadasfsdg' },
    { id: 2, title: 'qwerty2', content: 'adadasfsdg' },
    { id: 3, title: 'qwerty3', content: 'adadasfsdg' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT:
      console.log(action.payload);
      return { ...state };
    case types.CREATE_PROJECT_ERROR:
      console.error(action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default projectReducer;
