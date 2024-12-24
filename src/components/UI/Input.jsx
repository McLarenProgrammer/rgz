import { useRef } from 'react';
import classes from './styles/Input.module.css';

function Input({ children, inputID = "default", iconSrc = "icons/person.svg", placeholder = "Введите значение", hasIcon = false }) {
    const input = useRef(null);

    return (
        <>
            <label className={classes['input-text-label']} htmlFor={inputID}>{children}</label>
            <div className={classes["input-text-container"]}>
                {hasIcon ? <img className={classes['input-text-icon']} src={iconSrc} onClick={() => input.current.focus() } /> : ''}
                <input ref={input} className={[ classes['input-text'], hasIcon ? classes['with-icon'] : '' ].join(' ')} type="text" id={inputID} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input;