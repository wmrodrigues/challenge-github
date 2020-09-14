import React, { createContext, useState, useContext } from "react";

import api from "../service/api";

interface User {
    id: number;
    login: string;
    avatar_url: string;
    node_id: string;
    url: string;
    email: string;
    bio: string;
    followers: number;
    following: number;
}

interface UsersContextData {
    users: User[];
    handleListUsers(username: string): void;
    currentUser: User;
    handleGetUser(username: string): void;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export const UsersProvider: React.FC = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User>({} as User);

    // list all users
    const handleListUsers = async (username: string) => {
        const response = await api.get(`/search/users?q=${username}`);

        setUsers(response.data.items);
    };

    // list a user
    const handleGetUser = async (username: string) => {
        const response = await api.get(`/users/${username}`);

        setCurrentUser(response.data);
    };

    return (
        <UsersContext.Provider
            value={{
                users,
                handleListUsers,
                currentUser,
                handleGetUser,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => {
    const context = useContext(UsersContext);

    return context;
};
