import classes from './styles/Input.module.css';

function Input({ children, inputID = "default", iconSrc = "icons/person.svg" }) {
    return (
        <>
            <label className={classes['input-text-label']} htmlFor={inputID}>{children}</label>
            <div className={classes["input-text-container"]}>
                <img className={classes['input-text-icon']} src={iconSrc} alt="" />
                <input className={classes['input-text']} type="text" id={inputID} />
            </div>
        </>
    )
}

export default Input;