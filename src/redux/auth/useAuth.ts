import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../useHooks";
import {
  selectIsAuth,
  selectIsAuthUser,
  selectLoggedIn,
  selectRefresh,
} from "./selectors";

export const useAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectIsAuthUser);
  const isRefresh = useAppSelector(selectRefresh);
  const isLoggedIn = useAppSelector(selectLoggedIn);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  return {
    isAuth,
    user,
    isRefresh,
    isLoggedIn,
    location,
    dispatch,
    navigation,
  };
};
