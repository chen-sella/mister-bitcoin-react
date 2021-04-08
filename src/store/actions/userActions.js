import { userService } from '../../services/userService';

export function setUser() {
  return async (dispatch) => {
    const user = await userService.getLogedinUser();
    dispatch({ type: 'SET_USER', user });
  };
}

export function addMove(contact, amount, userId) {
  return async (dispatch) => {
    console.log(contact, amount, userId);
    const updatedUser = userService.addMove(contact, amount, userId);
    dispatch({ type: 'SET_USER', user:updatedUser });
  };
}
