import './styles/Protocols.css'
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
      <Input inputID='testText' inputType='password' hasIcon>Пароль</Input>
    </>
  )
}

export default Protocols