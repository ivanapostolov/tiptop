interface BaseData {
   price: number;
}

interface HousemaidData extends BaseData {
   readonly discriminator: 'HousemaidData';
   plan: string;
   planName: string;
}

interface AreaData extends BaseData {
   readonly discriminator: 'AreaData';
   area: number;
}

type ServiceData = HousemaidData | AreaData;

export default ServiceData;