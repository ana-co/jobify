import { Navigate } from "react-router-dom"
import { useAppContext } from "../context/appContext"
import React from 'react'

const ProtectedRoute = ({ children }) => {
    const { user } = useAppContext()
    if (!user) {
        return <Navigate to='/landing' />
    }
    return children
}

export default ProtectedRoute