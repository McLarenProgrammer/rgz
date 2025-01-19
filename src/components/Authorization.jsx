import classes from './styles/Authorization.module.css';
import Form from './UI/Form';
import Input from './UI/Input'

function Authorization() {
  return (
    <div className={classes.window}>
      <div className={classes.header}>
        <h1>Авторизация</h1>
      </div>
      <div className={classes.main}>
        <Form>
          <Input inputID='login' inputType='text' hasIcon>Логин</Input>
          <Input inputID='passowrd' inputType='password' iconSrc='icons' hasIcon>Пароль</Input>
        </Form>
      </div>
    </div>
  )
}

export default Authorization
