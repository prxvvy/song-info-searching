import React, {FC} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";

const App: FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
