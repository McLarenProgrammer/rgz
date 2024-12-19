import classes from './styles/Protocols.module.css'
import Button from './UI/Button'
import Checkbox from './UI/Checkbox';

function Protocols() {
    function someAction(argument) {
        console.log('Что-то произошло!', argument);
    }

    return (
    <>
      <Button clickAction={() => someAction('Да неужели?)')}>Тестовая кнопка</Button>
      <Checkbox inputName='testCheck'>Тестовый чекбокс</Checkbox>
    </>
  )
}

export default Protocols