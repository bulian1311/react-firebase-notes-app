import * as types from './types';

export const signIn = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch({ type: types.SIGNIN_SUCCESS });
    } catch (err) {
      dispatch({ type: types.SIGNIN_ERROR, payload: err });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
      dispatch({ type: types.SIGNOUT_SUCCESS });
    } catch (err) {
      dispatch({ type: types.SIGNOUT_ERROR, payload: err });
    }
  };
};

export const signUp = newUser => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);

      await firestore
        .collection('users')
        .doc(res.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });

      dispatch({ type: types.SIGNUP_SUCCESS });
    } catch (err) {
      dispatch({ type: types.SIGNUP_ERROR, payload: err });
    }
  };
};

export const authErrorClear = () => {
  return dispatch => {
    dispatch({ type: types.AUTH_ERROR_CLEAR });
  };
};
