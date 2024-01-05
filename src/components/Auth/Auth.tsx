import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Auth.module.css";
import { login, register } from "../../redux/auth/authOperations";
import { useAuth } from "../../redux/auth/useAuth";

export const Auth = () => {
  const { dispatch, navigation } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const registerResponse = await dispatch(register({ email, password }));

      if (registerResponse.type === "auth/register/fulfilled") {
        await dispatch(login({ email, password }));

        navigation("/main");
      } else {
        await dispatch(login({ email, password }));
        navigation("/main");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgSilver} />
      <div className={styles.bgBlue} />

      <div className={styles.backgroundImageTop} />
      <div className={styles.backgroundImageBottom} />

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Questify</h1>
        <p className={styles.text}>
          Questify will turn your life into a thrilling game full of amazing
          quests and exciting challenges.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Choose your name to sign up or log in"
            className={styles.email}
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type="password"
            className={styles.password}
            name="password"
            value={password}
            onChange={onChangePassword}
          />
          <button type="submit" className={styles.button}>
            go!
          </button>
        </form>
      </div>
    </div>
  );
};
