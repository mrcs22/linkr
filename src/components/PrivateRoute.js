import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({component: Component, path}){
    return (
        <Route path={path} exact>
            {localStorage.getItem("user") ? (<Component/>) : <Redirect to="/"/>}
        </Route>
    )
}