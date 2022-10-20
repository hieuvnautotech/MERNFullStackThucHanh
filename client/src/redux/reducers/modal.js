import { INIT_STATE } from "../../constant";
import { getType, showModal, hideModal } from "../actions";

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
    
    default:
      return state;
  }
}