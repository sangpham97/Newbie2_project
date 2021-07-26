import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [term, setTerm] = useState('')
  const [isOpenModal, setIsOpen] = useState(false)
  const [video, setVideo] = useState(null)
  const [isRegister, setIsRegister] = useState(false)
  const [LoginModal, setLoginModal] = useState(false)
  const [Author, setAuthor] = useState(null)

  const fetchData = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
    const data = await response.json()
    console.log(data)
    setProducts(data.hits)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [term])

  const OpenModal = (product) => {
    setIsOpen(true)
    setVideo(product)
  }
  const CloseModal = () => {
    setIsOpen(false)
    setVideo(null)
  }
  const OpenLogin = () => {
    setLoginModal(true)
  }
  const CloseLogin = () => {
    setLoginModal(false)
  }
  const OpenRegister = () => {
    setIsRegister(true)
  }
  const CloseRegister = () => {
    setIsRegister(false)
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        products,
        term,
        setTerm,
        isOpenModal,
        OpenModal,
        CloseModal,
        video,
        isRegister,
        LoginModal,
        OpenLogin,
        CloseLogin,
        OpenRegister,
        CloseRegister,
        Author,
        setAuthor,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
