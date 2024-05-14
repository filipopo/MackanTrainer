import { useEffect, useRef } from 'preact/hooks'
import './modal.css'

interface ModalProps {
  open: boolean
  setOpen: (b: boolean) => void
}

interface BaseModal extends ModalProps {
  children: any
}

function Modal({open, setOpen, children}: BaseModal) {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape")
      setOpen(false)
  }

  useEffect(() => {
    const modalElement = modalRef.current

    if (modalElement) {
      if (open) modalElement.showModal()
      else modalElement.close()
    }
  }, [open])

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown}>
      <button class="modal-close-btn" onClick={() => setOpen(false)}>X</button>
      {children}
    </dialog>
  )
}

export {Modal, type ModalProps}