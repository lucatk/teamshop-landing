import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Vereine`,
    description: `Ermöglichen Sie als Vereinsausrüster eine kinderleichte Bestellung von Bekleidung,
    Sportgeräten, Beflockung uvm. für Ihre Vereine und Vereinsmitglieder - bequem von Zuhause und rund um die Uhr!`,
  },
  {
    title: `Händler`,
    description: `Vereinsbekleidung ist nur Teil Ihres Sortiments. Bieten Sie Ihr gesamtes Sortiment im Shop an und bringen Sie
    Ihren gesamten Handel auf das nächste Level!`,
  },
  {
    title: `Mitarbeiter`,
    description: `Beenden Sie die nervenaufreibende Zettelwirtschaft,
    manuelle Kontaktaufnahme und Bestellung bei Ihren Vereinen und Kunden.
    Teamshop ermöglicht eine einfache, digitale und sichere Verwaltung von Bestellungen, Zahlung und Kundendaten!`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
          Einfach Umsatz steigern
        </h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Sportfachhandel goes online
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
