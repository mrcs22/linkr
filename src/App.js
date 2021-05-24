import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>

                </Route>
                <Route path="/sign-up" exact>

                </Route>
                <Route path="/timeline" exact>

                </Route>
                <Route path="/my-posts" exact>

                </Route>
                <Route path="/my-likes" exact>

                </Route>
                <Route path="/hashtags/:hashtag" exact>

                </Route>
                <Route path="/user/:id" exact>

                </Route>
            </Switch>
        </BrowserRouter>
    )
}