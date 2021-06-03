import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InvoicesTable = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/invoices')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="block">
                <div className="content">
                    <div className="caption">
                        <span>Invoices</span>
                    </div>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Create</th>
                                <th>No</th>
                                <th>Supply</th>
                                <th>Comment</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.date_created}</td>
                                        <td><a href="#">INV-{item.number}</a></td>
                                        <td>{item.date_supplied}</td>
                                        <td>{item.comment}</td>
                                        <td>
                                            <Link to={`/edit/${item._id}`}>
                                                <button className="button-edit">Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default InvoicesTable;
