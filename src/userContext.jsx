import { createContext, useState } from "react";

export const UserContext = createContext({ username: "", auth: false });

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: '', auth: true });

    const login = (username) => {
        setUser((user) => ({
            username: username,
            auth: true,
        }));
    };

    const logout = () => {
        setUser((user) => ({
            username: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value = {{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}