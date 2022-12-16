import styles from './email-ui.module.css';

/* eslint-disable-next-line */
export interface EmailUiProps {}

export function EmailUi(props: EmailUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EmailUi!</h1>
    </div>
  );
}

export default EmailUi;
