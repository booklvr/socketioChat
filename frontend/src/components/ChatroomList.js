import React, { Fragment, useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { } from '../actions/chatroomActions'

const ChatroomList = ({ history, chatrooms, deleteHandler }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {}, [dispatch])

  return (
    <Fragment>
      <h1>Chatroom List</h1>

      <ListGroup className='mt-6'>
        {chatrooms.map((chatroom) => (
          <ListGroup.Item key={chatroom._id}>
            <Row>
              <Col>
                <Link to={`/chatrooms/${chatroom._id}`}>{chatroom.name}</Link>
              </Col>
              <Col>
                {chatroom.user === userInfo._id && (
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(chatroom._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                )}
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  )
}

export default ChatroomList
