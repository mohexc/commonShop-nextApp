
import React, { FC, useContext, useEffect, useState } from "react";

interface CurrentUser {
    id: number;
    username: string;
}

interface ContextInterface {
    user: any;
    isLoading: boolean;
}

const Context = React.createContext<ContextInterface | null>(null);

const AuthContext: FC = ({ children }) => {
    const [user, setUser] = useState({
        username: 'admin',
        password: '1234',
        role: 'admin3'
    })
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Context.Provider
            value={{
                user,
                isLoading
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Cannot use useAuthContext outside Auth Context");
    }

    return context;
};

export default AuthContext;