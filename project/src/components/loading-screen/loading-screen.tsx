import { MainLayout } from '../common/common';
import * as SMain from '../home/home.styled';
import * as S from './loading-screen.styled';

function LoadingScreen():JSX.Element {
  return (
    <MainLayout isEmpty>
      <SMain.Main>
        <S.LoadingDiv>
          <S.LoadingText>Loading ...</S.LoadingText>
        </S.LoadingDiv>
      </SMain.Main>
    </MainLayout>
  );
}

export default LoadingScreen;
