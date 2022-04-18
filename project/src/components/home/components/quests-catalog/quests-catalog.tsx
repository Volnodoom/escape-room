import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import { AllGenre, TitleList } from 'src/const';
import { PreviewQuest } from 'src/components/card-quest/components';
import { useSelector } from 'react-redux';
import * as selector from 'src/store/data-challenges/challenges-selector';

const tabPatterns = [
  {
    genre: AllGenre,
    iconComponent: <IconAllQuests />,
  },
  {
    genre: TitleList.Adventures.ru,
    iconComponent: <IconAdventures />,
  },
  {
    genre: TitleList.Horror.ru,
    iconComponent: <IconHorrors />,
  },
  {
    genre: TitleList.Mystic.ru,
    iconComponent: <IconMystic />,
  },
  {
    genre: TitleList.Detectives.ru,
    iconComponent: <IconDetective />,
  },
  {
    genre: TitleList.SciFi.ru,
    iconComponent: <IconScifi />,
  },
];

function QuestsCatalog (): JSX.Element {
  const initialCondition = {genre: AllGenre};
  const challenges = useSelector(selector.getChallenges);

  return (
    <>
      <S.Tabs>
        {
          tabPatterns.map((line) => (
            <S.TabItem key={line.genre}>
              <S.TabBtn
                isActive={line.genre === initialCondition.genre}
              >
                {line.iconComponent}
                <S.TabTitle>{line.genre}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          ))
        }
      </S.Tabs>

      <S.QuestsList>
        {
          challenges.map((line) => (
            <PreviewQuest challengeInfo={line} key={line.id} />
          ))
        }
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
