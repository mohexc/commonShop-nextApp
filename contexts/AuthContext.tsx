
import React, { FC, useContext, useEffect, useState } from "react";

interface CurrentUser {
    id: number;
    username: string;
    password: string;
    role: string;
}

interface ContextInterface {
    user: any;
}

const Context = React.createContext<ContextInterface | null>(null);

const AuthContext: FC = ({ children }) => {
    const [user, setUser] = useState<CurrentUser | null>({
        id: 1,
        username: 'admin',
        password: '1234',
        role: 'admin'
    })

    return (
        <Context.Provider
            value={{
                user,
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