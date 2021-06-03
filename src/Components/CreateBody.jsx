import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

const CreateBody = () => {
    const [number, setNumber] = useState('');
    const [date_created, setDateCreated] = useState('');
    const [date_supplied, setDateSupplied] = useState('');
    const [comment, setComment] = useState('');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        fetch('/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number,
                date_created: dayjs(date_created).format('DD-MM-YYYY'),
                date_supplied: dayjs(date_supplied).format('DD-MM-YYYY'),
                comment
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    history.push('/');
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    };

    return (
        <div className="block">
            <div className="content">
                <div className="form" onSubmit={handleSubmit}>
                    <form action="">
                        <p>
                            <label htmlFor="number">Number:</label>
                            <input name="number" id="number"
                                type="text"
                                value={number}
                                onChange={e => setNumber(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="date_created">Invoice Date:</label>
                            <input name="date_created" id="date_created"
                                type="date"
                                value={date_created}
                                onChange={e => setDateCreated(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="date_supplied">Supply Date:</label>
                            <input name="date_supplied" id="date_supplied"
                                type="date"
                                value={date_supplied}
                                onChange={e => setDateSupplied(e.target.value)} />
                        </p>

                        <p className="full-width">
                            <label htmlFor="comment">Comment:</label>
                            <textarea name="comment"
                                id="comment"
                                cols="30"
                                rows="3"
                                value={comment}
                                onChange={e => setComment(e.target.value)} />
                        </p>
                        <p>

                        </p>
                        <div className="button-right">
                            <button className="button">Save</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default CreateBody;
