import Card from './components/molecules/Card'
import Button from './components/atoms/Button'
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";



function App() {

  return (
    <div className='app'>
      <Card title = 'Buttons filled'>
        <p className = 'text text-medium'>Buttons with background color.</p>
        <Button className = 'button' variant = 'base' onclick = { () => console.log('Base pressed.') }>
        Base
        </Button>
        <Button className = 'button' variant = 'primary' icon = {<FaArrowRightLong />} iconPosition = 'right' onclick = { () => console.log('Primary pressed.') }>
        Primary
        </Button>
        <Button className = 'button' variant = 'secondary' onclick = { () => console.log('Secondary pressed.') }>
        Secondary
        </Button>
        <Button className = 'button' variant = 'success' icon = {<FaCheck />} onclick = { () => console.log('Success pressed.') }>
        Success
        </Button>
        <Button className = 'button' variant = 'warning' icon = {<FaExclamation />} onclick = { () => console.log('Warning pressed.') }>
        Warning
        </Button>
        <Button className = 'button' variant = 'danger' icon = {<FaX />} onclick = { () => console.log('daneerpressed.') }>
        Danger
        </Button>
      </Card>

       <Card title = 'Buttons outline'>
        <p className = 'text text-medium'>Buttons with colored outline/text.</p>
        <Button className = 'button' variant = 'base' outline = { true } onclick = { () => console.log('Base pressed.') }>
        Base
        </Button>
        <Button className = 'button' variant = 'primary' outline = { true } icon = {<FaArrowRightLong />} iconPosition = 'right' onclick = { () => console.log('Primary pressed.') }>
        Primary
        </Button>
        <Button className = 'button' variant = 'secondary' outline = { true } onclick = { () => console.log('Secondary pressed.') }>
        Secondary
        </Button>
        <Button className = 'button' variant = 'success' outline = { true } icon = {<FaCheck />} onclick = { () => console.log('Success pressed.') }>
        Success
        </Button>
        <Button className = 'button' variant = 'warning' outline = { true } icon = {<FaExclamation />} onclick = { () => console.log('Warning pressed.') }>
        Warning
        </Button>
        <Button className = 'button' variant = 'danger' outline = { true } icon = {<FaX />} onclick = { () => console.log('daneerpressed.') }>
       Danger
        </Button>
      </Card>
      
    </div>
  )
}

export default App
