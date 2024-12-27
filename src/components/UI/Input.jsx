import { useRef } from 'react';
import classes from './styles/Input.module.css';

function Input({ children, inputID = "default", iconSrc = "icons/person.svg", placeholder = "Введите значение", hasIcon = false }) {
    const input = useRef(null);

    function animatedPlaceholder(e) {
        
    }

    return (
        <>
            <div className={classes["input-text-container"]}>
                {hasIcon ? <img className={classes['input-text-icon']} src={iconSrc} onClick={() => input.current.focus() } /> : ''}
                <input ref={input} className={[ classes['input-text'], hasIcon ? classes['with-icon'] : '' ].join(' ')} type="text" id={inputID}/>
                <div className={[classes['input-text-placeholder'], hasIcon ? classes['placeholder-with-icon'] : '' ].join(' ')}>{children}</div>
            </div>
        </>
    )
}

export default Input;