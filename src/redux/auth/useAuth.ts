import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../useHooks";
import { selectIsAuth, selectIsAuthUser, selectRefresh } from "./selectors";

export const useAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectIsAuthUser);
  const isRefresh = useAppSelector(selectRefresh);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  return { isAuth, user, isRefresh, dispatch, navigation };
};
