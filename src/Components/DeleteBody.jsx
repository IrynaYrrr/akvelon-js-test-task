import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const DeleteBody = () => {
    const id = useParams().id;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const history = useHistory();

    // Load data from db
    useEffect(() => {
        fetch(`/invoices/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    // Because of json-server reloading:
                    setTimeout(() => {
                        history.push('/');
                    }, 100);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [id, history]);

    return (
        <>
        </>
    );
};

export default DeleteBody;
