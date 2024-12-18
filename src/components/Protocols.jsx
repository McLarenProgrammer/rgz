import classes from './styles/Protocols.module.css'
import Button from './UI/Button'

function Protocols() {
    function someAction(argument) {
        console.log('Что-то произошло!', argument);
    }

    return (
    <>
      <Button clickAction={() => someAction('Да неужели?)')}>Тестовая кнопка</Button>
    </>
  )
}

export default Protocols