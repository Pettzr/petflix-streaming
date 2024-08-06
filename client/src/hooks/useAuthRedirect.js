import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { toast } from "react-toastify"


const useAuthRedirect = (auth, redirect, message) => {
    const navigate = useNavigate()
    const {isAuthenticated, checkLogin} = useContext(AppContext)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await checkLogin()
                if (isAuthenticated === auth) {
                    toast.error(message)
                    navigate(`${redirect}`, {replace: true})
                } 
            } catch (error) {
                navigate('/')
            }
        }

    checkAuth()
    }, [isAuthenticated, checkLogin, navigate, redirect, auth, message]
  )  
}

export default useAuthRedirect;