import { useAppSelector } from "../useHooks";
import { selectIsAuth } from "./selectors";

export const useAuth = () => {
  const isAuth = useAppSelector(selectIsAuth);
  return { isAuth };
};
