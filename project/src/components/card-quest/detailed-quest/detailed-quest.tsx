import { useEffect, useState } from 'react';
import { MainLayout } from '../../common/common';
import { ReactComponent as IconClock } from '../../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from '../components/components';
import { adaptDifficultyLevel, adaptGenre } from 'src/utils/component-utils';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as selector from 'src/store/data-challenges/challenges-selector';
import NotAvailablePage from 'src/components/not-available-page/not-available-page';
import { setTheme } from 'src/store/data-challenges/data-challenges';
import { ALL_GENRE } from 'src/const';

function DetailedQuest ():JSX.Element {
  const {id} = useParams<{id: string}>();
  const challenge = useSelector(selector.getSpecificChallenge(Number(id)));
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(ALL_GENRE));
  });

  if(!challenge) {
    return <NotAvailablePage />;
  }
  const {
    title,
    description,
    coverImg,
    type,
    level,
    peopleCount,
    duration,
  } = challenge;


  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{adaptGenre(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{adaptDifficultyLevel(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
}

export default DetailedQuest;
