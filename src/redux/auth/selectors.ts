import { RootState } from "../store";

export const selectIsAuth = (state: RootState) => state.auth.isAuth;

export const selectIsAuthUser = (state: RootState) => state.auth.userData;

export const selectRefresh = (state: RootState) => state.auth.refresh;
