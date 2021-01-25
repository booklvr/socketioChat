import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {
  addChatroom,
  listChatrooms,
  deleteChatroom,
} from '../actions/chatroomActions'
// import Meta from '../components/Meta'
import ChatroomList from '../components/ChatroomList'

const HomeScreen = ({ match }) => {
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const chatroomRegister = useSelector((state) => state.chatroomRegister)
  const { loading, chatroom, error } = chatroomRegister

  const chatroomList = useSelector((state) => state.chatroomList)
  const { loadingList, errorList, chatrooms } = chatroomList

  const chatroomDelete = useSelector((state) => state.chatroomDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = chatroomDelete

  const deleteHandler = (id) => {
    dispatch(deleteChatroom(id))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addChatroom(name))
    setName('')
  }

  useEffect(() => {
    dispatch(listChatrooms())
  }, [dispatch, chatroom, successDelete])

  return (
    <Fragment>
      <FormContainer>
        <h1>Add Chatroom</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='formAddChatroom'>
            <Form.Label>Add Chatroom</Form.Label>
            <Form.Control
              value={name}
              type='text'
              placeholder='Add Chatroom'
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </FormContainer>
      {errorList ||
        (errorDelete && <Message variant='danger'>{error}</Message>)}
      {loadingList || (loadingDelete && <Loader />)}

      <ChatroomList deleteHandler={deleteHandler} chatrooms={chatrooms} />
    </Fragment>
  )
}

export default HomeScreen
