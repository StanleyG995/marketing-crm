import Card from './components/molecules/Card'
import Button from './components/atoms/Button'
import { FaCheck } from "react-icons/fa6";

function App() {

  return (
    <>
      <Card title = 'Tytuł'>
        <p className = 'text-medium'>Treść wewnątrz karty.</p>
      </Card>
      <Button className = 'button' variant = 'primary' onclick = { () => console.log('Działa!') }>
        Kliknij mnie!
      </Button>
      <Button className = 'button'  onclick = { () => console.log('Działa!') }>
        Kliknij mnie!
      </Button>
      <Button className = 'button' variant = 'success' icon = {<FaCheck />} onclick = { () => console.log('Działa!') }>
        Kliknij mnie!
      </Button>
    </>
  )
}

export default App
