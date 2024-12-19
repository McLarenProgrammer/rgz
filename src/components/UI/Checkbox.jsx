import classes from './styles/Checkbox.module.css'

function Checkbox({ children, inputName = "default" }) {
    console.log(classes);

    return (
        <div className={classes.checkbox}>
            <input type="checkbox" id={inputName} />
            <label htmlFor={inputName}>{children}</label>
        </div>
    );
}

export default Checkbox;