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

interface WindowsData extends BaseData {
   readonly discriminator: 'WindowsData';
   small: number;
   big: number;
   doors: number;
   smallBlinds: number;
   bigBlinds: number;
   doorBlinds: number;
}

interface UpholsteredFurnitureData extends BaseData {
   readonly discriminator: 'UpholsteredFurnitureData';
   smallSofas :number;
   bigSofas: number;
   cornerSofas: number;
   armchairs: number;
   seats: number;
   stools: number;
   smallMattresses: number;
   smallSidedMattresses: number;
   bigMattresses: number;
   bigSidedMattresses: number;
}

type ServiceData = HousemaidData | AreaData | WindowsData | UpholsteredFurnitureData;

export default ServiceData;