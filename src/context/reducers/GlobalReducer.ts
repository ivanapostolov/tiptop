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
      case 'ADD_CONTACT_DATA':
         if (action.payload?.discriminator === 'ContactData') {
            state = {service: state.service, contactData: action.payload};
         }
         return state;
      default:
         return state;
   }
}

export default GlobalReducer;