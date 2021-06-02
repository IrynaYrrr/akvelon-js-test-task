import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Invoices from './Pages/Invoices';
import Create from './Pages/Create';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Invoices />
                </Route>
                <Route path="/create" exact>
                    <Create />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
