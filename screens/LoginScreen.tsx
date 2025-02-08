import { useContext, useState } from "react";
import { Alert } from "react-native";

import { login } from "../helpers/auth";
import { AuthContext } from "../store/auth-context";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);

  async function signInHandler({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authetication failed!",
        "Could not log in. Please check your credentials."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />;
  }
  return <AuthContent onAuthenticate={signInHandler} isLogin />;
}

export default LoginScreen;
