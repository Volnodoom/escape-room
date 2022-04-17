import { AppRoutes } from '../../const';
import { Footer, Header } from '../common/common';
import * as SMain from '../home/home.styled';
import * as S from './not-available-page.styled';

function NotAvailablePage():JSX.Element {
  return (
    <>
      <Header isEmpty/>
      <SMain.Main>
        <S.NonAvailableDiv>
          <S.NonAvailableText>
      404.
            <small> Page not found</small>
          </S.NonAvailableText>
          <S.NonAvailableLink to={AppRoutes.Main}>
        Go to main page
          </S.NonAvailableLink>
        </S.NonAvailableDiv>
      </SMain.Main>
      <Footer />
    </>
  );
}

export default NotAvailablePage;
