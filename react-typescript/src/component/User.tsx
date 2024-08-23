import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null); //by default typescript automatic set type to null based on initial type
    const handleLogin = () => {
        setUser({
            name: 'Vivek',
            email: 'vivekvikram777@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
}

export default User;