import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Invoices from './Pages/Invoices';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Delete from './Pages/Delete';
import View from './Pages/View';

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
                <Route path="/view/:id" exact>
                    <View />
                </Route>
                <Route path="/edit/:id" exact>
                    <Edit />
                </Route>
                <Route path="/delete/:id" exact>
                    <Delete />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
