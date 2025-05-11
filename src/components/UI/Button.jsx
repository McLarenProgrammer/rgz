import "./styles/Button.css";
import { useState } from "react";

function Button({ children, clickAction, buttonType = "" }) {
    const [waves, setWaves] = useState([]);

    function animatedClick(e) {
        const size = Math.max(
            e.currentTarget.offsetWidth,
            e.currentTarget.offsetHeight
        );
        const x = e.currentTarget.offsetWidth / 2 - size / 2;
        const y = e.currentTarget.offsetHeight / 2 - size / 2;

        const newWave = {
            id: Date.now(),
            style: {
                width: size,
                height: size,
                top: y,
                left: x,
            },
        };
        setWaves((prevWaves) => [...prevWaves, newWave]);

        setTimeout(() => {
            setWaves((prevWaves) =>
                prevWaves.filter((wave) => wave.id !== newWave.id)
            );
        }, 500);
    }

    return (
        <button
            onClick={(e) => {
                animatedClick(e);
                clickAction ? clickAction() : "";
            }}
            type={buttonType}
        >
            {children}
            {waves.map((wave) => (
                <span
                    key={wave.id}
                    className="wave"
                    style={wave.style}
                />
            ))}
        </button>
    );
}

export default Button;
