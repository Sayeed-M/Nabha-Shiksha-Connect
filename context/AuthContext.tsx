import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Using these keys to simulate a database and session in localStorage
const USERS_STORAGE_KEY = 'nabha-shiksha-users';
const SESSION_STORAGE_KEY = 'nabha-shiksha-session';

type StoredUser = User & { passwordHash: string };

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const session = localStorage.getItem(SESSION_STORAGE_KEY);
      return session ? JSON.parse(session) : null;
    } catch {
      return null;
    }
  });
  
  // Seed initial users if they don't exist
  useEffect(() => {
    const initializeUsers = () => {
      try {
        const usersRaw = localStorage.getItem(USERS_STORAGE_KEY);
        if (!usersRaw || JSON.parse(usersRaw).length === 0) {
          const initialUsers: StoredUser[] = [
            {
              id: 'teacher-01',
              name: 'Teacher',
              email: 'teacher@nabha.edu',
              role: UserRole.TEACHER,
              passwordHash: 'password123',
            },
            {
              id: 'admin-01',
              name: 'Admin',
              email: 'admin@nabha.edu',
              role: UserRole.ADMIN,
              passwordHash: 'password123',
            },
          ];
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(initialUsers));
        }
      } catch (error) {
        console.error("Could not initialize users:", error);
      }
    };
    initializeUsers();
  }, []);


  const getUsers = (): StoredUser[] => {
    try {
      const users = localStorage.getItem(USERS_STORAGE_KEY);
      return users ? JSON.parse(users) : [];
    } catch {
      return [];
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.passwordHash === password);

    if (user) {
      const now = new Date().toISOString();
      const userWithLogin = { ...user, lastLogin: now };
      
      const updatedUsers = users.map(u => u.id === user.id ? userWithLogin : u);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));

      const { passwordHash, ...userToSave } = userWithLogin;
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(userToSave));
      setCurrentUser(userToSave);
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    const users = getUsers();
    if (users.some(u => u.email === email)) {
      alert("An account with this email already exists.");
      return false;
    }
    
    const now = new Date().toISOString();
    const newUser: StoredUser = {
      id: Date.now().toString(),
      name,
      email,
      role: UserRole.STUDENT, // All new registrations are students by default
      passwordHash: password, // Storing password directly for simulation
      lastLogin: now,
    };

    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    
    // Automatically log in after registration
    const { passwordHash, ...userToSave } = newUser;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(userToSave));
    setCurrentUser(userToSave);

    return true;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};