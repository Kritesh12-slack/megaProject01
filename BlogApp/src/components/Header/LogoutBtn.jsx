import {authService} from "../../appwrite/auth"
import {useDispatch} from "react-redux"

export default function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(()=> dispatch(logout()))
    }
    return(
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Logout</button>
    )
}