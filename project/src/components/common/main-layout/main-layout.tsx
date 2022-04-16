import { Header, Footer } from '../common';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
}

function MainLayout ({children}: MainLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );}

export default MainLayout;
