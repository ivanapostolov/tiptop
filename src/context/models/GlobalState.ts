import ServiceData from './ServiceData';

export interface Service {
   readonly discriminator: 'Service';
   name: string;
   label: string;
   duration: number;
   data?: ServiceData;
}

export interface ContactData {
   readonly discriminator: 'ContactData';
   firstName: string;
   lastName: string;
   address: string;
   date: string;
   comment: string;
   phone: string;
}

interface GlobalState {
   contactData: ContactData;
   service: Service;
}

export default GlobalState;