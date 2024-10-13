import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <button>
        <Link to="/">Return to home</Link>
      </button>
    </div>
  );
}
export default NotFound;
