export interface Service {
   name: string;
   parameters: any;
   price: number;
}

export interface ContactData {
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