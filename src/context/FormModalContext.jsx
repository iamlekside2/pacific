import { createContext, useContext, useState, useEffect } from 'react'

const FormModalContext = createContext(null)

export function FormModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <FormModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </FormModalContext.Provider>
  )
}

export function useFormModal() {
  const ctx = useContext(FormModalContext)
  if (!ctx) throw new Error('useFormModal must be used within FormModalProvider')
  return ctx
}
