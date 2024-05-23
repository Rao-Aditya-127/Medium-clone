import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface blogInter{
    
    "id" : string,
    "title": string,
    "content": string
    "date" : string
    "author": {
        "name": string
    }
}

export const useBlog = ({ id } : {id : string}) =>{
    const [ loading , setloading ] = useState(true);
    const [ blog , setBlog ] = useState<blogInter>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
            headers : {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setloading(false);
            })
    } , [id])


    return{
        loading,
        blog
    }
}



export const useBlogs = () => {
    const [ loading , setloading ] = useState(true);
    const [ blogs , setBlogs ] = useState<blogInter[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
            headers : {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blog);
                setloading(false);
            })
    } , [])


    return{
        loading,
        blogs
    }
}

// new hook for blogs related to particular user for updating deleting blogs

export const usemyblogs = () =>{
    const [ loading , setloading ] = useState(true);
    const [ myblogs , setMyblogs ] = useState<blogInter[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/myblogs` , {
            headers : {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setMyblogs(response.data.blogs);
                setloading(false);
            })
    } , [])


    return{
        loading,
        myblogs
    }
}