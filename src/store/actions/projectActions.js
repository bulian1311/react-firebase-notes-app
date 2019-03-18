import * as types from './types';

export const createProject = project => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    try {
      await firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Nikolay',
        authorLastName: 'Kachanov',
        authorId: 123,
        createdAt: new Date()
      });

      dispatch({ type: types.CREATE_PROJECT, payload: project });
    } catch (err) {
      dispatch({ type: types.CREATE_PROJECT_ERROR, payload: err });
    }
  };
};
