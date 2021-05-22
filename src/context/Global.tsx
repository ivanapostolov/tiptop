import React, { useState } from 'react';

const AppContext = React.createContext({});

const Global: React.FC = ({ children }) => {
   const [cleaning, setCleaning] = useState(null);

   return (
      <AppContext.Provider value={{cleaning, setCleaning}}>
         {children}
      </AppContext.Provider>
   );
}

export default Global;