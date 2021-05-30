import ServiceData from './ServiceData';

export interface Service {
   readonly discriminator: 'Service';
   name: string;
   label: string;
   data?: ServiceData;
}

export interface ContactData {
   readonly discriminator: 'ContactData';
   firstName: string;
   lastName: string;
   address: string;
   date: string;
   phone: string;
}

interface GlobalState {
   contactData: ContactData;
   service: Service;
}

export default GlobalState;