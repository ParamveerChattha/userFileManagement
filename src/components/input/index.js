import styles from "./input.module.scss";

const Input = ({ error, ...rest }) => {
  return (
    <div className={styles.Input}>
      <input {...rest} />
      {error && (
        <div>
          <span className={styles.InputError}>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
