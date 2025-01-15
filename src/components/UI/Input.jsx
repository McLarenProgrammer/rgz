import { useRef } from 'react';
import classes from './styles/Input.module.css';

function Input({ children, inputID = "default", iconSrc = "icons/person.svg", hasIcon = false, inputType = "text" }) {
    const input = useRef(null);
    const placeholder = useRef(null);

    function animatedPlaceholder(event) {
        if (document.activeElement === input.current || event.target.value !== '') {
            placeholder.current.classList.add(classes['input-text-placeholder-up']);
            return;
        }
        placeholder.current.classList.remove(classes['input-text-placeholder-up']);
    }

    return (
        <>
            <div className={classes["input-text-container"]}>
                {hasIcon ? <img className={classes['input-text-icon']} src={iconSrc} onClick={() => input.current.focus() } /> : ''}
                <input
                    ref={input}
                    className={
                        [
                            classes['input-text'],
                            hasIcon ? classes['with-icon'] : '',
                        ].join(' ')
                    }
                    type={inputType}
                    id={inputID}
                    onFocus={animatedPlaceholder}
                    onBlur={animatedPlaceholder}
                />
                <div
                    ref={placeholder}
                    className={
                        [
                            classes['input-text-placeholder'],
                            hasIcon ? classes['placeholder-with-icon'] : '',
                        ].join(' ')
                    }
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Input;