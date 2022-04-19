import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingStatus } from 'src/const';
import * as selector from 'src/store/data-challenges/challenges-selector';
import { fetchQuestsAction } from 'src/store/data-challenges/data-challenges';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext
} from '../common/common';
import LoadingScreen from '../loading-screen/loading-screen';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

function HomePage ():JSX.Element {
  const loadingChallengesStatus = useSelector(selector.getChallengesLoadingStatus);
  const isLoaded = loadingChallengesStatus === LoadingStatus.Succeeded;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );}

export default HomePage;
