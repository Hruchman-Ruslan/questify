import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../useHooks";
import { selectIsAuth } from "./selectors";

export const useAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  return { isAuth, dispatch, navigation };
};
