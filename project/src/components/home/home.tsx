import { Challenge } from 'src/types/general-types';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext
} from '../common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

type HomePageProps = {
  itemsList: Challenge[],
}

function HomePage (props: HomePageProps):JSX.Element {
  const challenges = props.itemsList;
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog itemsList={challenges}/>
      </S.Main>
    </MainLayout>
  );}

export default HomePage;
