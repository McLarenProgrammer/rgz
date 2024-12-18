import classes from './styles/Button.module.css'
import { createElement } from 'react';

function Button({ children, clickAction }) {
    function animatedClick(e) {
        const size = Math.max(e.target.offsetWidth, e.target.offsetHeight);
        const x = size / 2;
        const y = size / 2;
        let wave = createElement(
            'span',
            {
                className: 'wave',
                style: {
                    width: size,
                    height: size,
                    top: y,
                    left: x
                }
            }
        );
        e.target.
    }

    return (
        <>
            <button
                className={classes.button}
                onClick={(e) => {
                    animatedClick(e);
                    clickAction();
                }}
            >
                {children}
            </button>
        </>
    )
}

export default Button