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

interface WindowsData extends BaseData {
   readonly discriminator: 'WindowsData';
   small: number;
   big: number;
   doors: number;
   smallBlinds: number;
   bigBlinds: number;
   doorBlinds: number;
}

type ServiceData = HousemaidData | AreaData | WindowsData;

export default ServiceData;