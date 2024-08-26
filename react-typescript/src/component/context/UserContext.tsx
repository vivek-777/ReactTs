import React, { createContext, useState } from "react";

export type AuthUser = { name: string, email: string } | null

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser,
    setUser: React.Dispatch<React.SetStateAction<AuthUser>>,
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
};