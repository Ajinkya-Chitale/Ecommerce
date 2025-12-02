import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
        <title>404 - Page Not Found</title>
        <div className='PageNotFound_Page'>
            <div class="container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <div class="links">
                    <Link to="/">Go to Homepage</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default PageNotFound
