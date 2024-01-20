import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { useEffect, useState } from "react";
export default function Protected({childern,authentication = true}){
    const [loader,setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status);

    // Easy underStanding
    // useEffect(()=>{
    //     if(authStatus === "true"){
    //         navigate("/")
    //     }
    //     else if(authStatus === "false"){
    //         navigate("/login")
    //     }
    //     setLoader(false)
    // },[authStatus,navigate,authentication])

    useEffect(()=>{if(authentication && authStatus !== authentication){
        navigate("/login")
    } else if(!authentication && authStatus !== authentication){
        navigate("/")
    }
    setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{childern}</>
}