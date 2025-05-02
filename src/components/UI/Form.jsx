import './styles/Form.css';

function Form({children, formAction}) {
  return (
    <form className="form" action={formAction}>
      {children}
    </form>
  )
}

export default Form