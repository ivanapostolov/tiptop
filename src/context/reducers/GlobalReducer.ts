import GlobalState from '../models/GlobalState';

const GlobalReducer = (state: GlobalState, action: string) => {
   switch(action) {
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