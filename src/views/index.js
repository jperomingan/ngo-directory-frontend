import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from 'utils/auth'

const { isLoggedIn } = auth

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render = {(props) => isLoggedIn ? <Component {...props} /> : <Redirect to="/" />}/>
    )
}

const PublicRoute = ({component: Component, restricted = false, ...rest}) => {
    return (
        <Route {...rest} render={(props) => isLoggedIn && restricted ? <Component {...props} /> : <Redirect to="/" />} />
    )
}

export { PrivateRoute, PublicRoute }