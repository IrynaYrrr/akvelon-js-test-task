import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InvoicesTableBody = (props) => (
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(item => {
                        return (
                            <tr key={item._id}>
                                <td>{item.date_created}</td>
                                <td><a href="#">INV-{item.number}</a></td>
                                <td>{item.date_supplied}</td>
                                <td>{item.comment}</td>
                                <td>
                                    <Link to={`/view/${item._id}`}>
                                        <button className="button-view">View</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/edit/${item._id}`}>
                                        <button className="button-edit">Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => props.handleDeleteElement(item._id, item.number)} className="button-delete">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
);

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

    const handleDeleteElement = (id, number) => {
        const newItems = items.filter((i) => i._id !== id);

        setItems(newItems);

        fetch(`/invoices/${id}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then(
                (result) => {
                    alert(`INV_${number} удален`);
                },
                (error) => {
                    alert('delete error');
                }
            );
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <InvoicesTableBody items={items} handleDeleteElement={handleDeleteElement} />
        );
    }
};

export default InvoicesTable;
