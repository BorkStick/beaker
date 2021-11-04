import { useHistory } from "react-router-dom";

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()} className="btn btn-light rounded-0">Back</button>
        </>
    );
};