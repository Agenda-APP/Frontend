import { useAppDispatch } from "./redux";
import { toggleModal } from "../store/modalSlice";
import { IFormInputs } from "../components/Modal/Form";

export const usePostTask = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    dispatch(toggleModal(false));
  };
  return { onSubmit };
};
