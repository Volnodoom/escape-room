import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderTab } from 'src/const';
import * as selector from 'src/store/data-challenges/challenges-selector';
import { setPageType } from 'src/store/data-challenges/data-challenges';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

type HeaderProps = {
  isEmpty?: boolean,
}

function Header (props: HeaderProps): JSX.Element {
  const {isEmpty} = props;
  const dispatch = useDispatch();
  const headerTabs = Object.values(HeaderTab);
  const pageType = useSelector(selector.getPageType);

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    const nameOfLink = ((evt.target as HTMLAnchorElement).parentElement as HTMLLIElement).dataset.linkname;
    if(nameOfLink === HeaderTab.Quest.linkName || nameOfLink === HeaderTab.Contacts.linkName) {
      dispatch(setPageType(nameOfLink));
    } else {
      evt.preventDefault();
      (evt.target as HTMLAnchorElement).blur();
    }
  };

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        {
          !isEmpty &&
          <S.Navigation>
            <S.Links>
              {
                headerTabs.map((line) => (
                  <S.LinkItem data-linkname={line.linkName} key={line.title}>
                    <S.Link
                      to={line.link}
                      onClick={handleClick}
                      $isActiveLink={line.linkName === pageType}
                      key={line.title}
                    >{line.title}
                    </S.Link>
                  </S.LinkItem>
                ))
              }
            </S.Links>
          </S.Navigation>
        }

        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );}

export default Header;
