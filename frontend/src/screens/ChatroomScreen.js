import { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChatroomDetails } from '../actions/chatroomActions'
import { Container } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ChatroomScreen = ({ match }) => {
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
      <Container style={{ backgroundColor: 'pink' }}>
        <h2>{chatroom.name}</h2>
        
      </Container>
    </Fragment>
  )
}

export default ChatroomScreen
