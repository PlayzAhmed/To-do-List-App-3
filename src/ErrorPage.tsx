import {Link} from 'react-router'

const ErrorPage = () => {
  return (
    <>
        <h1>Oops!</h1>
        <p>An unexpected error has occurred.</p>
        <Link to={"/"}>Return Back to home</Link>
    </>
  )
}

export default ErrorPage