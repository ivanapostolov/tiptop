import GlobalState, { Service, ContactData} from '../models/GlobalState';

export interface Action {
   type: string;
   payload?: Service | ContactData;
}

const GlobalReducer = (state: GlobalState, action: Action): GlobalState => {
   switch(action.type) {
      case 'ADD_SERVICE':
         if (action.payload?.discriminator === "Service") {
            state = {service: action.payload, contactData: state.contactData};
         }
         return state;
      default:
         return state;
   }
}

export default GlobalReducer;