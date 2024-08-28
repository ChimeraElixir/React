import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignUp = () => {
    const [loading,setLoading]=useState(false)
    const {authUser,setAuthUser}= useAuthContext()

    const signup = async ({fullName,username,password,confirmPassword,gender}) => {
        const success = handleInputError({fullName,username,password,confirmPassword,gender})
        if(!success)return;

        try {
            const res = await fetch("api/auth/signup",{
                method:"POST",
                headers:{
                    "content-type":"application/json"

                },
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-app-user",JSON.stringify(data))
            setAuthUser(data)

            
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
        
    }
    return {loading,signup}
}

export default useSignUp


function handleInputError({fullName,username,password,confirmPassword,gender}) {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("All fields are required");
        return false;
    }
    if(password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if(password.length<6){
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
}