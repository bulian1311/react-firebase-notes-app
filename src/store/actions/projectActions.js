import * as types from './types';

export const createProject = project => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    try {
      await firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      });

      dispatch({ type: types.CREATE_PROJECT, payload: project });
    } catch (err) {
      dispatch({ type: types.CREATE_PROJECT_ERROR, payload: err });
    }
  };
};
