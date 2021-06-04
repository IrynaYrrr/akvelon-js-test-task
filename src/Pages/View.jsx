import Header from './../Components/Header';
import ViewBody from '../Components/ViewBody';


const View = (props) => {
    return (
        <div className="page">
            <Header message="View Invoice" />
            <ViewBody/>
        </div>
    );
};

export default View;
