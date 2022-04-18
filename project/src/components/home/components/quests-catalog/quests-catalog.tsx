import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import { ALL_GENRE, TitleList } from 'src/const';
import { PreviewQuest } from 'src/components/card-quest/components';
import { useDispatch, useSelector } from 'react-redux';
import * as selector from 'src/store/data-challenges/challenges-selector';
import { MouseEvent } from 'react';
import { setTheme } from 'src/store/data-challenges/data-challenges';

const tabPatterns = [
  {
    genre: ALL_GENRE,
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
  const theme = useSelector(selector.getTheme);
  const challenges = useSelector(selector.getChallenges);
  const dispatch = useDispatch();

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    dispatch(
      setTheme(
        ((evt.target as HTMLSpanElement | SVGElement)
          .parentElement as HTMLButtonElement).dataset.btntheme,
      ));
  };

  return (
    <>
      <S.Tabs>
        {
          tabPatterns.map((line) => (
            <S.TabItem key={line.genre}>
              <S.TabBtn
                isActive={line.genre === theme}
                data-btntheme={line.genre}
                onClick={handleClick}
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
