import "./styles/Registration.css"
import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";

function Registration() {
    return (
        <>
            <div className="main-form">
                <Form>
                    <h1>Регистрация</h1>
                    <Input inputID="login" inputType="text">
                        Логин
                    </Input>
                    <Input inputID="password" inputType="password">
                        Пароль
                    </Input>
                    <Input inputID="email" inputType="email">
                        Электронная почта
                    </Input>
                    <Button>Зарегистрировать</Button>
                </Form>
            </div>
        </>
    );
}

export default Registration;
