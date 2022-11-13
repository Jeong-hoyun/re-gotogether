import { useSelector } from "react-redux";
import { RootState } from "../../rtk/store";

export default function useLogin() {
  const loginUser = useSelector((state: RootState) => state.login.login);
  return {
    loginUser,
  };
}
