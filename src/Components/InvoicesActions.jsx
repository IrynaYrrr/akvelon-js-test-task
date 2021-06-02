import { Link } from 'react-router-dom';

const InvoicesActions = () => {
    return (
        <div className="block">
            <div className="content">
                <div className="caption">
                    <span>Actions</span>
                </div>
                <Link to="/create">
                    <button className="button">Add new</button>
                </Link>
            </div>
        </div>
    );
};

export default InvoicesActions;
