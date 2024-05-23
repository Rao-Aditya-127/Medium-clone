import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Tiptap from "../components/Tiptap"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Publish = () => {
    const [ title , setTitle ] = useState('');
    const navigate = useNavigate();
  
  
    const handelEditorContentSave = async (html : string) => {
  
      console.log(html)
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog` , {
          title,
          content : html
        },{
          headers : {
              Authorization : localStorage.getItem("token")
          }
      });
  
      navigate(`/blog/${response.data.id}`)
    }
  
  
    return (
          <>
              <AppBar></AppBar>
              <div className="flex justify-center my-24">
                <div className="flex flex-col w-1/2">
  
                  <textarea 
                  onChange={(e) => {setTitle(e.target.value)}}
                  className="textarea textarea-bordered textarea-lg border-2 border-zinc-200 rounded w-full p-2" placeholder="Title">
                  </textarea>
  
                  <Tiptap onEditorContentSave = {handelEditorContentSave}>
                  </Tiptap>
  
                </div>  
              </div>
          </>
    )
}