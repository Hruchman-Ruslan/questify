import styles from "./Auth.module.css";

export const Auth = () => {
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

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Choose your name to sign up or log in"
            className={styles.login}
          />
          <input type="text" className={styles.password} />
          <button type="submit" className={styles.button}>
            go!
          </button>
        </form>
      </div>
    </div>
  );
};
