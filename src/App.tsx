import Card from './components/molecules/Card'
import Button from './components/atoms/Button'
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


function App() {

  return (
    <>
      <Card title = 'Tytuł'>
        <p className = 'text-medium'>Treść wewnątrz karty.</p>
        <Button className = 'button' variant = 'base' onclick = { () => console.log('Działa!') }>
        Base
        </Button>
        <Button className = 'button' variant = 'primary' icon = {<FaArrowRightLong />} iconPosition = 'right' onclick = { () => console.log('Działa!') }>
        Primary
        </Button>
        <Button className = 'button' variant = 'secondary' icon = {<FaCheck />} onclick = { () => console.log('Działa!') }>
        Secondary
        </Button>
      </Card>
      
    </>
  )
}

export default App
