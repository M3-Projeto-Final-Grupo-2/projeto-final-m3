import React, { ReactNode } from 'react';
import { LoginContextProvider } from './loginContext';

import { RegisterProvider } from './RegisterContext';

interface IProviderProps {
  children: ReactNode;
}
function Providers({ children }: IProviderProps) {
  return (
    <LoginContextProvider>

    <RegisterProvider>
  
  
        {children}
  

    </RegisterProvider>

    </LoginContextProvider>

    )
      
}

export default Providers;
