import Mensaje from './Mensaje.jsx'

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div>
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Description />
    </div>
  )
}

export default App
