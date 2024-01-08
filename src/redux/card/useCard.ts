import { useAppSelector } from "../useHooks";
import { selectCard } from "./selectors";

export const useCard = () => {
  const card = useAppSelector(selectCard);

  return card;
};
