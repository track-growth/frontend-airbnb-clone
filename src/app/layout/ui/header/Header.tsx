import { Link } from 'react-router-dom';
import { AuthMenu } from './menu';
import { SiAirbnb } from 'react-icons/si';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-b from-white from-40% to-gray-100">
      <Link to="/" aria-label="Airbnb homepage">
        <SiAirbnb className="fill-[#FF385C] size-7" />
      </Link>
      <AuthMenu />
    </header>
  );
};
