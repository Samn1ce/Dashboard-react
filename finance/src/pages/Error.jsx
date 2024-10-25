import { Link } from "react-router-dom";

function Error() {

    return(
        <div>
            404 Not Found
            <Link to="/">Homepage</Link>
        </div>
    );

}

export default Error