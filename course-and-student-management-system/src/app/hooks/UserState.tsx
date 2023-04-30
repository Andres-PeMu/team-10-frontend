'use client';

import { User } from '../model/User.model';
import React, { useState, ReactNode, useReducer } from 'react';
import { UserContext } from './UserContex';
import { MyContextProvider } from './CourseReducer';
import { UseReducer, initialState } from './UseReducer';


const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    cedula: '',
    email: '',
    phone: '',
    role: 'admin',
    isAuthenticated: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MyContextProvider>
        {children}
      </MyContextProvider>
    </UserContext.Provider>
  );
};

export default AppStateProvider;