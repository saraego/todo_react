
import styles from "../styles/Modal.module.css"

interface Props  {
    children:React.ReactNode;
}

export const Modal = ({children}: Props) => {

    const closeModal = (e:React.MouseEvent):void =>{
        e.preventDefault()
        const modal = document.querySelector('#modal')
        modal!.classList.add("hide")
    }


  return (
    <div id="modal" className="hide">
        <div className={styles.fade} onClick={closeModal}>{}</div>
        <div className={styles.modal}>
            <h2>texto modal</h2>
            {children}
        </div>
    </div>
  )
}