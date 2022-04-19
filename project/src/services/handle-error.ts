import { toast } from 'react-toastify';
import { BAD_REQUEST, UNDEFINED_ERROR } from 'src/const';
import { ErrorType } from 'src/types/general.type';

export const handleError = (error: ErrorType): void => {

  if((error as Response).status === BAD_REQUEST) {
    toast.info(`${(error as Response).status}: ${(error as Response).statusText}. Please, try again later.`);
  } else {
    toast.error(UNDEFINED_ERROR);
  }
};
