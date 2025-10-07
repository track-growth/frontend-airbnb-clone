import { Outlet } from 'react-router-dom';
import { Header } from './ui';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* TODO: footer */}
    </>
  );
};
