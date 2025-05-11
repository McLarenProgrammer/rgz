import { useState } from "react";
import "./styles/Checkbox.css";

function Checkbox({ children, inputID = "default" }) {
    const [checked, setChecked] = useState(false);

    function changeChecked() {
        setChecked((prev) => !prev);
    }

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                id={inputID}
                name={inputID}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            <div className="checkbox-label">
                <span className="checkbox-box" onClick={changeChecked}>
                    <svg
                        className="checkbox-tick"
                        viewBox="0 0 107 154"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M20 70C30 85 37 90 51 120C53 125 58 125 60 120C73 80 83 50 102 20"
                            stroke="#0053A4"
                            strokeWidth="28"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
                <label htmlFor={inputID} className="checkbox-label-text">
                    {children}
                </label>
            </div>
        </div>
    );
}

export default Checkbox;
