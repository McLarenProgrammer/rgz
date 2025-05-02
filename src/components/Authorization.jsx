import "./styles/Modal.css";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";

function Authorization() {
    async function authorization(formData) {
        console.log(formData);
    }

    return (
        <div className="window">
            <div className="header">
                <h1>Авторизация</h1>
            </div>
            <div className="main">
                <Form formAction={authorization}>
                    <Input inputID="login" inputType="text" hasIcon>
                        Логин
                    </Input>
                    <Input
                        inputID="password"
                        inputType="password"
                        iconSrc="icons/password.svg"
                        hasIcon
                    >
                        Пароль
                    </Input>
                    <Button>Войти</Button>
                </Form>
            </div>
        </div>
    );
}

export default Authorization;
