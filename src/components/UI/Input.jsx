import { useRef } from "react";
import "./styles/Input.css";

function Input({
  children,
  inputID = "default",
  iconSrc = "icons/person.svg",
  hasIcon = false,
  inputType = "text",
}) {
  const input = useRef(null);
  const placeholder = useRef(null);

  function animatedPlaceholder(event) {
    if (document.activeElement === input.current || event.target.value !== "") {
      placeholder.current.classList.add("input-text-placeholder-up");
      return;
    }
    placeholder.current.classList.remove("input-text-placeholder-up");
  }

  return (
    <>
      <div
        className="input-text-container"
      >
        {hasIcon ? (
          <img className="input-text-icon" src={iconSrc} onClick={() => input.current.focus()} />
        ) : (
          ""
        )}
        <div
          ref={placeholder}
          className={`input-text-placeholder${hasIcon ? " placeholder-with-icon" : ""}`}
          onClick={() => input.current.focus()}
        >
          {children}
        </div>
        <input
          ref={input}
          className={`input-text${hasIcon ? classes["with-icon"] : ""}`}
          type={inputType}
          id={inputID}
          name={inputID}
          onFocus={animatedPlaceholder}
          onBlur={animatedPlaceholder}
        />
      </div>
    </>
  );
}

export default Input;