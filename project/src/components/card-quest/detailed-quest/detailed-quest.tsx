import { useEffect } from 'react';
import { MainLayout } from '../../common/common';
import { ReactComponent as IconClock } from '../../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { adaptDifficultyLevel, adaptGenre } from 'src/utils/component-utils';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as selectorQuest from 'src/store/data-challenges/challenges-selector';
import NotAvailablePage from 'src/components/not-available-page/not-available-page';
import { fetchOneQuesAction, setTheme } from 'src/store/data-challenges/data-challenges';
import { AllGenre, LoadingStatus } from 'src/const';
import LoadingScreen from 'src/components/loading-screen/loading-screen';
import * as selectorBooking from 'src/store/data-booking/booking-selector';
import { setBookingModal } from 'src/store/data-booking/data-booking';

function DetailedQuest ():JSX.Element {
  const {id} = useParams<{id: string}>();
  const challenge = useSelector(selectorQuest.getSpecificChallenge(Number(id)));
  const loadingChallengeStatus = useSelector(selectorQuest.getChallengesLoadingStatus);
  const isBookingModalActive = useSelector(selectorBooking.getBookingModalStatus);
  const dispatch = useDispatch();

  const isLoaded = loadingChallengeStatus === LoadingStatus.Succeeded;
  const isError = loadingChallengeStatus === LoadingStatus.Failed;

  useEffect(() => {
    dispatch(setTheme(AllGenre.server));
  });

  useEffect(() => {
    if(!challenge) {
      dispatch(fetchOneQuesAction(Number(id)));
    }
  },[challenge, dispatch, id]);

  if(isError) {
    return <NotAvailablePage />;
  }

  if (!challenge || !isLoaded) {
    return <LoadingScreen />;
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
    dispatch(setBookingModal(true));
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

        {isBookingModalActive && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
}

export default DetailedQuest;
