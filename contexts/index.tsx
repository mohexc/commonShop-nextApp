import React, { FC } from "react";
import AuthContext from "./AuthContext";


const ContextStore: FC = ({ children }) => {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default ContextStore;