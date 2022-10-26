import { INIT_STATE } from "../../constant";
import { getType, showModal, hideModal, editModal } from "../actions";

export default function modalReducer(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      // break;
      return {
        isShow: true,
      };
    case getType(hideModal):
      // break;
      return {
        isShow: false,
      };
    case getType(editModal):
      // break;
      console.log("vào edit modal")
      console.log(action);
      INIT_STATE.modal._id = action.payload._id;
      return {
        ...state,
        isShow: true,
      };

    default:
      return state;
  }
}
