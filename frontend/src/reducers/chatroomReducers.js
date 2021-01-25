import {
  CHATROOM_REGISTER_SUCCESS,
  CHATROOM_REGISTER_FAIL,
  CHATROOM_REGISTER_REQUEST,
  CHATROOM_LIST_SUCCESS,
  CHATROOM_LIST_REQUEST,
  CHATROOM_LIST_FAIL,
  CHATROOM_DETAILS_SUCCESS,
  CHATROOM_DETAILS_REQUEST,
  CHATROOM_DETAILS_FAIL,
  CHATROOM_DELETE_SUCCESS,
  CHATROOM_DELETE_REQUEST,
  CHATROOM_DELETE_FAIL,
} from '../constants/chatroomConstants'

export const chatroomRegisterReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CHATROOM_REGISTER_REQUEST:
      return { loading: true }
    case CHATROOM_REGISTER_SUCCESS:
      return { loading: false, chatroom: payload }
    case CHATROOM_REGISTER_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}

export const chatroomListReducer = (state = { chatrooms: [] }, action) => {
  const { type, payload } = action

  switch (type) {
    case CHATROOM_LIST_REQUEST:
      return { loading: true, ...state }
    case CHATROOM_LIST_SUCCESS:
      const { chatrooms } = payload
      return { loading: false, chatrooms }
    case CHATROOM_LIST_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}

export const chatroomDeleteReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CHATROOM_DELETE_REQUEST:
      return { loading: true, ...state }
    case CHATROOM_DELETE_SUCCESS:
      return { loading: false, success: true }
    case CHATROOM_DELETE_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}

export const chatroomDetailsReducer = (state = { chatroom: {} }, action) => {
  const { type, payload } = action

  switch (type) {
    case CHATROOM_DETAILS_REQUEST:
      return { loading: true }
    case CHATROOM_DETAILS_SUCCESS:
      return { loading: false, chatroom: payload }
    case CHATROOM_DETAILS_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}
