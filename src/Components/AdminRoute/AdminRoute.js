import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route , Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user , isLoading , isAdmin} = useAuth();

    if(isLoading){
        return <Spinner animation="grow" />
    }
    if(!isAdmin){
        return <Spinner animation="grow" />
    }
    return (
        <Route
        {...rest}
        render={
            ({location}) =>
            user.email && isAdmin ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: location}
                    }}
                />
            )
        }
        
        />
            
    );
};

export default AdminRoute;