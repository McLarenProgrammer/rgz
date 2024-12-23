import classes from './styles/Checkbox.module.css'

function Checkbox({ children, inputID = "default" }) {
    console.log(classes);

    return (
      <div className={classes.checkbox}>
        <input type="checkbox" id={inputID} />
        <label htmlFor={inputID} className={classes["checkbox-label"]}>
          <span className={classes["checkbox-box"]}>
            <svg
              className={classes["checkbox-tick"]}
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
          <span className={classes["checkbox-label-text"]}>{children}</span>
        </label>
      </div>
    );
}

export default Checkbox;