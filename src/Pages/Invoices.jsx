import Header from './../Components/Header';
import InvoicesActions from './../Components/InvoicesActions';
import InvoicesTable from './../Components/InvoicesTable';

const Invoices = () => {
    return (
        <div className="page">
            <Header message="Invoices" />
            <InvoicesActions />
            <InvoicesTable />
        </div>
    );
};

export default Invoices;
