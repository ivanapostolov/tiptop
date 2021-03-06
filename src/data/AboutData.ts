import { ColorPalette } from "../components/about/Widget";

interface AboutDataModel {
   heading: string;
   content: string;
   palette: ColorPalette;
}

const AboutData: AboutDataModel[] = [{
   heading: 'Кои сме ние?',
   content: 'Ние сме малка компания с големи амбиции и възможности. Специализирани сме в почистването на жилищни и офис помещения, мебели, прозорци, както и при следремонтни дейности. Нашата основна мисия е създаването и организирането на система с която Вие максимално лесно и удобно да получите необходимата усуга, с резултати които надминават очакванията Ви.',
   palette: ColorPalette.FIRST
}, {
   heading: 'Нашите служители?',
   content: 'При нас работят предимно млади хора с голяма мотивация, динамично темпо на работа и висок професионализъм. Безкомпромисни сме в подбора на своите служители, както и в тяхното обучение, защото приемаме всеки служител, на всяка позиция, като важна част от нашия колектив. Стремим се да бъдем малък, сплотен екип с висока продуктивност и винаги отлични резултати.',
   palette: ColorPalette.SECOND
}, {
   heading: 'Нашите клиенти?',
   content: 'Нашата основна философия за успех е в отношението към клиентите ни. Винаги се радваме да отговаряме на вашите въпроси, на всеки от посочените канали за връзка, по всяко време. Разработената от нас онлайн система предоставя лесен начин да получите желаната усуга и прозрачност относно нашите цени.',
   palette: ColorPalette.FIRST
}, {
   heading: 'Как работим?',
   content: 'Само с няколко клика и минимална информация от Ваша страна ще резервирате всяко от посочените почиствания, като винаги може да добавите допълнителна информация с която ние да се съобразим. Преди почистването ще получите обаждане от наш служител за потвурждаване на поръчката При възникнали въпроси сме на Ваше разположение на посоченият телефон и имейл адрес.',
   palette: ColorPalette.SECOND
}];

export default AboutData;