import React from 'react'
import { Button } from 'react-bootstrap'

function ControlPage(props) {
  return (
    <div className="d-flex justify-content-between mb-5 mt-3">
      <div>
        {props.idItem[0] > 0 ? (
          <Button className="me-2" variant="danger" onClick={props.startPage}>
            Inicio
          </Button>
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {props.idItem[0] > 0 ? (
          <Button
            className="me-2"
            variant="outline-danger"
            onClick={props.prevPage}
          >
            Atrás
          </Button>
        ) : (
          <div></div>
        )}
        <Button className="me-2" variant="success">
          {props.currentPage}
        </Button>
        <Button
          className={
            props.currentPage + 1 <= props.limitPage ? 'me-2' : 'd-none'
          }
          variant="outline-success"
          id="1"
          onClick={props.changePage}
        >
          {props.currentPage + 1}
        </Button>
        <Button
          className={
            props.currentPage + 2 <= props.limitPage ? 'me-2' : 'd-none'
          }
          variant="outline-success"
          id="2"
          onClick={props.changePage}
        >
          {props.currentPage + 2}
        </Button>
        <Button
          className={
            props.currentPage + 3 <= props.limitPage ? 'me-2' : 'd-none'
          }
          variant="outline-success"
          id="3"
          onClick={props.changePage}
        >
          {props.currentPage + 3}
        </Button>
        <Button
          className={
            props.currentPage + 4 <= props.limitPage ? 'me-2' : 'd-none'
          }
          variant="outline-success"
          id="4"
          onClick={props.changePage}
        >
          {props.currentPage + 4}
        </Button>
        <Button
          className={
            props.currentPage + 5 <= props.limitPage ? 'me-2' : 'd-none'
          }
          variant="outline-success"
          id="5"
          onClick={props.changePage}
        >
          {props.currentPage + 5}
        </Button>
        {props.idItem[1] < props.universities.length &&
        props.idItem[1] > props.currentPage ? (
          <Button variant="outline-success" onClick={props.nextPage}>
            Siguiente
          </Button>
        ) : (
          <div></div>
        )}
      </div>

      <div>
        {props.idItem[1] < props.universities.length &&
        props.idItem[1] > props.currentPage ? (
          <Button className="ms-2" variant="success" onClick={props.endPage}>
            Fin
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default ControlPage
