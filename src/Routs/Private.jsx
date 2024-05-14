import { PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { AuthContext } from './AuthProvider';


const Private = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to='/sinin'></Navigate>;
};

export default Private;
Private.prototype={
    children:PropTypes.node
}