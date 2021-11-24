import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import University from './components/University'
import ControlPage from './components/ControlPage'

// API
const FEATURED_API = 'http://universities.hipolabs.com/search?country=Mexico'

const SEARCH_API =
  'http://universities.hipolabs.com/search?country=Mexico&name='

function App() {
  // Estados
  const [universities, setUniversities] = useState([])
  const [idItem, setIdItem] = useState([0, 10])
  const [currentPage, setCurrentPage] = useState(1)
  const [limitPage, setLimitPage] = useState()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getUniversities(FEATURED_API)
  }, [])

  // Función para buscar una universidad
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (setSearchTerm) getUniversities(SEARCH_API + searchTerm)

    setSearchTerm('')
  }
  // Función para obtener las universidades
  const getUniversities = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        const cantUni = data.length / 10
        const resto = data.length % 10
        setUniversities(data)

        if (resto > 0) {
          setLimitPage(cantUni + 1)
        } else if (cantUni > 0.0 && cantUni <= 0.9) {
          setLimitPage(1)
        } else {
          setLimitPage(cantUni)
        }
      })
  }
  // Función que guarda el valor del input
  const handleOnchange = (e) => {
    setSearchTerm(e.target.value)
  }
  // Función que cambia de pagina
  const changePage = (event) => {
    const num = Number(event.target.id)
    const start = idItem[0] + 10 * num
    const end = idItem[1] + 10 * num
    const page = [start, end]
    setCurrentPage(currentPage + num)
    setIdItem(page)
  }
  // Función del boton siguiente
  const nextPage = () => {
    const start = idItem[0] + 10
    const end = idItem[1] + 10
    const page = [start, end]
    setCurrentPage(currentPage + 1)
    setIdItem(page)
  }
  // Función del boton atrás
  const prevPage = () => {
    const start = idItem[0] - 10
    const end = idItem[1] - 10
    const page = [start, end]
    setCurrentPage(currentPage - 1)
    setIdItem(page)
  }
  // Función del boton final de pagina
  const endPage = () => {
    const end = universities.length
    const start = end - 10
    const page = [start, end]
    setIdItem(page)
    setCurrentPage(parseInt(limitPage))
  }
  // Función del boton de incio
  const startPage = () => {
    const page = [0, 10]
    setCurrentPage(1)
    setIdItem(page)
  }
  // Limita los datos a solo 10
  const page = universities.slice(idItem[0], idItem[1])

  return (
    <div className="App">
      <Container>
        <Row>
          {/* input Search */}
          <header onSubmit={handleOnSubmit}>
            <Form className="mt-3">
              <Form.Control
                type="search"
                value={searchTerm}
                onChange={handleOnchange}
                className=" p-3 text-dark fw-bold rounded-pill"
                placeholder="Buscar Universidad"
              />
            </Form>
          </header>

          <Col>
            {/* Cards */}
            <div className="row  cardscontainer">
              {page.length > 0 &&
                page.map((e, index) => <University key={index} uni={e} />)}
            </div>
            {/* Paginación */}
            <ControlPage
              nextPage={nextPage}
              prevPage={prevPage}
              idItem={idItem}
              universities={universities}
              endPage={endPage}
              startPage={startPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              changePage={changePage}
              limitPage={limitPage}
              setLimitPage={setLimitPage}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
