import * as S from './preview-quest.styled';
import { ReactComponent as IconPerson } from '../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../assets/img/icon-puzzle.svg';
import { Challenge } from 'src/types/general.type';
import { AppRoutes } from 'src/const';
import { adaptDifficultyLevel } from 'src/utils/component-utils';

type PreviewQuestProps = {
  challengeInfo: Challenge,
}

function PreviewQuest (props: PreviewQuestProps): JSX.Element {
  const {
    id,
    title,
    previewImg,
    peopleCount,
    level,
  } = props.challengeInfo;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={AppRoutes.Quest(id)}>
        <S.Quest>
          <S.QuestImage
            src={`../${previewImg}`}
            width="344"
            height="232"
            alt={title}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]}–${peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {adaptDifficultyLevel(level)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

export default PreviewQuest;
