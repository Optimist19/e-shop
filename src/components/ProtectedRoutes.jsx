import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
export default function ProtectedRoutes(){
	const {uid} = useSelector(store=>store.firebaseAuth)

return (
    uid === "firebase" ? <Outlet/> : <Navigate to='/public'/>
  )
}