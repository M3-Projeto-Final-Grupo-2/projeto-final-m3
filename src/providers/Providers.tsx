import React, { ReactNode } from 'react';
import { CitiesProvider } from './citiesContext';

import { ProfileProvider } from './profileContext';
import { RegisterProvider } from './RegisterContext';

interface IProviderProps {
  children: ReactNode;
}
function Providers({ children }: IProviderProps) {
  return (
    <RegisterProvider>

    <ProfileProvider>
    <CitiesProvider>
        {children}
    </CitiesProvider>

    </ProfileProvider>
    </RegisterProvider>

    )
      
}

export default Providers;
