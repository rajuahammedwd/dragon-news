import { createContext, useState } from "react";

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const AuthContext = createContext(null)






    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;