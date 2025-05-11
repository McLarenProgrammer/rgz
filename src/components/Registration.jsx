import { useActionState } from "react";
import "./styles/Registration.css";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";

function Registration() {
    const [state, submitAction] = useActionState(registerUser, {
        data: null,
        error: null,
    });

    async function registerUser(prevState, formData) {
        const login = formData.get("login");
        const password = formData.get("password");
        const isCataloger = formData.get("isCataloger");

        const response = await fetch("http://127.0.0.1:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                login: login,
                password: password,
                is_cataloger: isCataloger,
            }),
        });
        return { data: response, error: null };
    }

    return (
        <>
            <div className="main-form">
                <Form formAction={submitAction}>
                    <h1>Регистрация</h1>
                    <Input inputID="login" inputType="text">
                        Логин
                    </Input>
                    <Input inputID="password" inputType="password">
                        Пароль
                    </Input>
                    <Checkbox inputID="isCataloger">Каталогизатор</Checkbox>
                    <Button buttonType="submit">Зарегистрировать</Button>
                </Form>
                {state.data && <p>{state.data.message}</p>}
            </div>
        </>
    );
}

export default Registration;
