import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "./Backdrop";
import { modalActions } from "../../store/modalSlice";
import ModalContainer from "./ModalContainer";
import CoupleDiary from "../projects/coupleDiary/CoupleDiary";

const Modal = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.modal.activeModal);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Backdrop onClick={() => dispatch(modalActions.CLOSE_MODAL())}>
      <ModalContainer>{activeModal === "Couple Diary" && <CoupleDiary />}</ModalContainer>
    </Backdrop>
  );
};

export default Modal;
