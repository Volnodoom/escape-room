import { Link } from '../common/common';
import { AppRoutes } from '../../const';
import { nonAvailableDiv, nonAvailableLink, nonAvailableText } from './not-available-page.style';

function NotAvailablePage():JSX.Element {
  return (
    <div style={nonAvailableDiv}>
      <h1 style={nonAvailableText}>
      404.
        <small> Page not found</small>
      </h1>
      <Link to={AppRoutes.Main} style={nonAvailableLink}>
        Go to main page
      </Link>
    </div>
  );
}

export default NotAvailablePage;
