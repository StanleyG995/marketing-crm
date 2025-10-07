import Card from './components/molecules/Card'
import Button from './components/atoms/Button'
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


function App() {

  return (
    <div className='app'>
      <Card title = 'Buttons filled'>
        <p className = 'text-medium'>Buttons with background color.</p>
        <Button className = 'button' variant = 'base' onclick = { () => console.log('Działa!') }>
        Base
        </Button>
        <Button className = 'button' variant = 'primary' icon = {<FaArrowRightLong />} iconPosition = 'right' outline= { true }onclick = { () => console.log('Działa!') }>
        Primary
        </Button>
        <Button className = 'button' variant = 'secondary' icon = {<FaCheck />} onclick = { () => console.log('Działa!') }>
        Secondary
        </Button>
      </Card>

       <Card title = 'Buttons outline'>
        <p className = 'text-medium'>Buttons with colored outline/text.</p>
        <Button className = 'button' variant = 'base' onclick = { () => console.log('Działa!') }>
        Base
        </Button>
        <Button className = 'button' variant = 'primary' icon = {<FaArrowRightLong />} iconPosition = 'right' outline= { true }onclick = { () => console.log('Działa!') }>
        Primary
        </Button>
        <Button className = 'button' variant = 'secondary' icon = {<FaCheck />} onclick = { () => console.log('Działa!') }>
        Secondary
        </Button>
      </Card>
      
    </div>
  )
}

export default App
