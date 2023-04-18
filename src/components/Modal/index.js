import { motion } from "framer-motion";
import { Backdrop } from "../Backdrop";
import { FormModal } from "./FormModal";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        trasition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
    }
};

const Modal = ({handleClose}) => {
    return (
        <Backdrop className="backdrop" onClick={handleClose}>
            <motion.div onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <FormModal />
                <button className="close" onClick={handleClose}>Close</button>
            </motion.div>
            <div className="greybackground"></div>
        </Backdrop>
    )
}

export default Modal