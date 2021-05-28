import GlobalState from '../models/GlobalState';

export interface Action {
   type: string;
   props?: any;
}

const GlobalReducer = (state: GlobalState, action: Action) => {
   switch(action.type) {
      case 'ADD_SERVICE':
         state = {service: {
            name: "name",
            parameters: "23 square meters",
            price: 24.35
         }, contactData: state.contactData};
         return state;
      default:
         return state;
   }
}

export default GlobalReducer;