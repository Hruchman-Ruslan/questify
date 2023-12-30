import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../useHooks";
import { selectIsAuth, selectIsAuthUser } from "./selectors";

export const useAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectIsAuthUser);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  return { isAuth, user, dispatch, navigation };
};
