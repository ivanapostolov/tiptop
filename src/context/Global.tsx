import React, { useReducer } from 'react';
import GlobalState from './models/GlobalState';
import GlobalReducer, { Action } from './reducers/GlobalReducer';

interface ContextProps {
   state: GlobalState;
   setState: React.Dispatch<Action>;
}

export const AppContext = React.createContext<Partial<ContextProps>>({});

const initialState: GlobalState = {
   service: {
      name: "",
      parameters: "",
      price: 0
   },
   contactData: {
      firstName: "",
      lastName: "",
      address: "",
      date: "",
      phone: ""
   }
}

interface GlobalProviderProps {
   children: React.ReactNode;
   value?: Partial<GlobalState>;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children, value }) => {
   const [globalState, globalDispatch] = useReducer(GlobalReducer, initialState);

   return (
      <AppContext.Provider value={{ state: globalState, setState: globalDispatch }}>
         { children }
      </AppContext.Provider>
   );
}