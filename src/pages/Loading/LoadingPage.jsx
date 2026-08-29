import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoadingPage = () => {
    const navigate=useNavigate();
    const {search}=useLocation();
    const query=new URLSearchParams(search);
    const nextUrl=query.get("next");
    useEffect(()=>{
        if(nextUrl){
            setTimeout(()=>{
                navigate(`/${nextUrl}`)
            },5000)
        }
    },[nextUrl,navigate])
    return (
        <div className="flexCenter h-screen">
            <div className="animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-secondary"/>
        </div>
    );
};

export default LoadingPage;