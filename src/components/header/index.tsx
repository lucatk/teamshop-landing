import { tw, css } from 'twind/css';
import Button from '@/components/button';
// import Mabitz from '@/constants/png/mabitz.png';
// import SportPaul from '@/constants/png/sport-paul.png';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Ihre Vereinsartikel, einfach verkauft.
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Bringen Sie die Ausrüstung Ihrer Vereine schnell und unkompliziert online!
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Entdecken</Button>
        <span className={tw(`mx-2`)}>oder</span>
        <Button>Jetzt anfragen!</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>
          Diese Händler zählen auf uns
        </p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <img
            src="/images/mabitz.png"
            alt="Sport Mabitz"
            className={tw(`m-10`)}
            width={140}
            style={{ filter: `grayscale(100%) invert(0.5) opacity(0.5)` }}
          />
          <img
            src="/images/sport-paul.png"
            alt="INTERSPORT Sport Paul"
            className={tw(`m-10`)}
            width={180}
            style={{ filter: `grayscale(100%) invert(0.5) opacity(0.6)` }}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
