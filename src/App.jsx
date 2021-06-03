import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Invoices from './Pages/Invoices';
import Create from './Pages/Create';
import Edit from './Pages/Edit';

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
                <Route path="/edit/:id" exact>
                    <Edit />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
