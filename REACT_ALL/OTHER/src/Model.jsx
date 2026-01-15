import { createPortal } from "react-dom";

function Model({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}

        <button style={styles.btn} onClick={onClose}>Close</button>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "300px",
  },
  btn: {
    marginTop: "15px",
  },
};

export default Model;
