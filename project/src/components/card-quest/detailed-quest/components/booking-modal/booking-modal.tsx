import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../../assets/img/icon-close.svg';
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { matchedErrors } from 'src/utils/component-utils';
import { ErrorMessageFormValidation, LoadingStatus } from 'src/const';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingOrderAction, setBookingLoadingStatus, setBookingModal } from 'src/store/data-booking/data-booking';
import { BookingPost } from 'src/types/general.type';
import * as selector from 'src/store/data-booking/booking-selector';

function BookingModal (): JSX.Element {
  const [currentName, setCurrentName] = useState<string>('');
  const [currentPhone, setCurrentPhone] = useState<string>('');
  const [currentNumberPeople, setCurrentNumberPeople] = useState<string>('');
  const [currentAgreement, setCurrentAgreement] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const statusOfUpdate = useSelector(selector.getBookingLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    (statusOfUpdate === LoadingStatus.Loading) && setIsLoading(true);
    if(statusOfUpdate === LoadingStatus.Succeeded) {
      resetForm();
      dispatch(setBookingModal(false));
      dispatch(setBookingLoadingStatus(LoadingStatus.Idle));
    }
    (statusOfUpdate === LoadingStatus.Failed) && setIsLoading(false);
  },[dispatch, statusOfUpdate]);

  const resetForm = () => {
    setIsLoading(false);
    setCurrentName('');
    setCurrentPhone('');
    setCurrentNumberPeople('');
    setCurrentAgreement(true);
  };

  const handleNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setCurrentName(value);
  };

  const handlePhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if(matchedErrors.number(value)) {
      evt.target.setCustomValidity(ErrorMessageFormValidation.number);
    } else if(matchedErrors.length(value)) {
      evt.target.setCustomValidity(ErrorMessageFormValidation.length);
    } else {
      setCurrentPhone(value);
      evt.target.setCustomValidity(ErrorMessageFormValidation.noErrors);
    }
    evt.target.reportValidity();
  };

  const handlePeopleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if(Number(value) < 0) {
      evt.target.setCustomValidity(ErrorMessageFormValidation.positive);
    } else {
      setCurrentNumberPeople(value);
      evt.target.setCustomValidity(ErrorMessageFormValidation.noErrors);
    }
    evt.target.reportValidity();
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const result: BookingPost = {
      name: currentName,
      peopleCount: Number(currentNumberPeople),
      phone: String(currentPhone),
      isLegal: currentAgreement,
    };

    dispatch(fetchBookingOrderAction(result));
  };

  const handleCloseClick = (evt: MouseEvent<HTMLButtonElement>) => {
    if(evt.currentTarget) {
      dispatch(setBookingModal(false));
      resetForm();
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action=""
          method="post"
          id="booking-form"
          onSubmit={handleOnSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              onChange={handleNameChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              onChange={handlePhoneChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
            Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              onChange={handlePeopleChange}
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" disabled={!currentAgreement}>
            {isLoading ? 'Отправляем запрос...' : 'Отправить заявку'}
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              onChange={() => setCurrentAgreement(!currentAgreement)}
              checked
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
              Я согласен с{' '}
                <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );}

export default BookingModal;
