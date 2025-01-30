import classes from './styles/Form.module.css';

function Form({children, formAction}) {
  return (
    <form className={classes.form} action={formAction}>
      {children}
    </form>
  )
}

export default Form