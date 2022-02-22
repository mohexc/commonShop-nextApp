import { useRouter } from "next/router";
import React, { PropsWithChildren, ReactElement } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import Home from "../../pages";

interface Props {
    children: ReactElement | null
}
const ProtectRoute = ({ children }: PropsWithChildren<Props>) => {
    const { user } = useAuthContext();
    const router = useRouter()
    const path = router.pathname.split('/')
    if (path[1] === 'admin' && user.role !== "admin") {
        router.replace('/')
        return < Home />
    }
    return children
};

export default ProtectRoute