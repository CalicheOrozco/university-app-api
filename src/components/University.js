import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

function University(props) {
  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      xxl={3}
      className="cards text-center pt-3 pb-3 d-flex align-items-center justify-content-center"
    >
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1632616427546-a471c1cff36a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <Card.Body>
          {/* Se coloca el title del bookmark que esta en la posición 1 del vector */}
          <Card.Title>{props.uni.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.uni.web_pages}
          </Card.Subtitle>

          <Button
            href={props.uni.web_pages}
            target="_blank"
            variant="outline-success"
          >
            Entrar al sitio web
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default University
