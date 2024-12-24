import classes from './styles/Protocols.module.css'
import Button from './UI/Button'
import Checkbox from './UI/Checkbox';
import Input from './UI/Input';

function Protocols() {
    function someAction(argument) {
        console.log('Что-то произошло!', argument);
    }

    return (
    <>
      <Button clickAction={() => someAction('Да неужели?)')}>Тестовая кнопка</Button>
      <Checkbox inputID='testCheck'>Тестовый чекбокс</Checkbox>
      <Input inputID='testText' placeholder='Почта' hasIcon>Тестовый инпут</Input>
    </>
  )
}

export default Protocols