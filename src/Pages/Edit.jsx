import Header from './../Components/Header';
import EditBody from '../Components/EditBody';

const Edit = (props) => {
    return (
        <div className="page">
            <Header message="Edit Invoice" />
            <EditBody />
        </div>
    );
};

export default Edit;
