import React, { ReactNode } from 'react';
import { CitiesProvider } from './citiesContext';

interface IProviderProps {
  children: ReactNode;
}
function Providers({ children }: IProviderProps) {
  return (
    <CitiesProvider>

        {children}
    </CitiesProvider>
    )
      
}

export default Providers;
