import axios from 'axios'
import {
  CHATROOM_REGISTER_REQUEST,
  CHATROOM_REGISTER_SUCCESS,
  CHATROOM_REGISTER_FAIL,
  CHATROOM_LIST_REQUEST,
  CHATROOM_LIST_SUCCESS,
  CHATROOM_LIST_FAIL,
  CHATROOM_DELETE_REQUEST,
  CHATROOM_DELETE_SUCCESS,
  CHATROOM_DELETE_FAIL,
  CHATROOM_DETAILS_REQUEST,
  CHATROOM_DETAILS_SUCCESS,
  CHATROOM_DETAILS_FAIL,
} from '../constants/chatroomConstants'

import { USER_LOGOUT } from '../constants/userConstants'

// import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'

export const addChatroom = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CHATROOM_REGISTER_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/chatrooms', { name }, config)

    dispatch({
      type: CHATROOM_REGISTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CHATROOM_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listChatrooms = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CHATROOM_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/chatrooms`, config)

    console.log('data', data)

    dispatch({
      type: CHATROOM_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch({ type: USER_LOGOUT })
    }
    dispatch({
      type: CHATROOM_LIST_FAIL,
      payload: message,
    })
  }
}

export const deleteChatroom = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CHATROOM_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/chatrooms/${id}`, config)

    dispatch({
      type: CHATROOM_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    console.log(message)
    if (message === 'Not authorized, token failed') {
      dispatch({ type: USER_LOGOUT })
    }
    dispatch({
      type: CHATROOM_DELETE_FAIL,
      payload: message,
    })
  }
}

export const getChatroomDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CHATROOM_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/chatroom/${id}`, config)

    dispatch({
      type: CHATROOM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch({ type: USER_LOGOUT })
    }
    dispatch({
      type: CHATROOM_DETAILS_FAIL,
      payload: message,
    })
  }
}
