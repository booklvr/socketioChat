import { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChatroomDetails } from '../actions/chatroomActions'
import { ListGroup, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ChatroomScreen = ({ match }) => {
  const [newMessage, setNewMessage] = useState('')

  const chatroomDetails = useSelector((state) => state.chatroomDetails)
  const { loading, error, chatroom } = chatroomDetails

  console.log(chatroomDetails)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChatroomDetails(match.params.id))
  }, [dispatch, match])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Fragment>
      <div>
        <h2>{chatroom.name}</h2>
        <ListGroup>
          {chatroom.messages &&
            chatroom.messages.map((message) => (
              <ListGroup.Item key={message.id}>message.message</ListGroup.Item>
            ))}
        </ListGroup>
        <Form>
          <Form.Group>
            <Form.Label>message</Form.Label>
            <Form.Control
              type='text'
              placeholder='enter message'
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  )
}

export default ChatroomScreen
