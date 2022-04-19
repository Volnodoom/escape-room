import { Header, Footer } from '../common';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
  isEmpty?: boolean;
}

function MainLayout ({children, isEmpty}: MainLayoutProps): JSX.Element {
  return (
    <>
      <Header isEmpty={isEmpty}/>
      {children}
      <Footer />
    </>
  );}

export default MainLayout;
