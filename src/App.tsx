import Card from './components/molecules/Card'
import Button from './components/atoms/Button'

function App() {

  return (
    <>
      <Card title = 'Tytuł'>
        <p>Treść wewnątrz karty.</p>
      </Card>
      <Button className = 'button' variant = 'primary' onclick = { () => console.log('Działa!') }>
        Kliknij mnie!
      </Button>
    </>
  )
}

export default App
