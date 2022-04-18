import { AppRoutes } from '../../const';
import { MainLayout } from '../common/common';
import * as SMain from '../home/home.styled';
import * as S from './not-available-page.styled';

function NotAvailablePage():JSX.Element {
  return (
    <MainLayout isEmpty>
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
    </MainLayout>
  );
}

export default NotAvailablePage;
