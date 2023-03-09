import React, { ReactNode } from 'react';
import { CitiesProvider } from './citiesContext';
import { LoginContextProvider } from './loginContext';

import { ProfileProvider } from './profileContext';
import { RegisterProvider } from './RegisterContext';

interface IProviderProps {
  children: ReactNode;
}
function Providers({ children }: IProviderProps) {
  return (
    <LoginContextProvider>

    <RegisterProvider>
    <ProfileProvider>
    <CitiesProvider>
        {children}
    </CitiesProvider>
    </ProfileProvider>
    </RegisterProvider>

    </LoginContextProvider>

    )
      
}

export default Providers;
