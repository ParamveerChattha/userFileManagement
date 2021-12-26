import styles from "./popup.module.scss";
import { Close } from "../../assets/svg";
import { useState } from "react";

const Popup = ({ show, setStep }) => {
  const [showPopup, setShowPopup] = useState(show);
  function closePopup(e) {
    e.preventDefault();
    setShowPopup(false);
    setStep(0);
  }
  return (
    <>
      {showPopup ? (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <header className={styles.modal_header}>
              <h2 className={styles.modal_header_title}> SUCCESS!!</h2>
              <button className={styles.close} onClick={closePopup}>
                <img src={Close} alt="close" />
              </button>
            </header>
            <main className={styles.modal_content}>
              The Details have been submitted for further process!
            </main>
            <footer className={styles.modal_footer}>
              <button className={styles.modal_close} onClick={closePopup}>
                Close
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
