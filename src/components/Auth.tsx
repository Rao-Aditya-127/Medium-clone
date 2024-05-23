import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@adityarao/medium-blog"
import axios from "axios"
import { BACKEND_URL } from "../config";
import CustomAlert from "./CustomAlert";

// Define or import labelInputs component here

export const Auth = ({ type } : {type : "signup" | "signin"}) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupInput>({
    name : "",
    username : "",
    password : "",
  })  

  // new code ---------------
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

    
  async function sendRequest() {
    try{
      const response = axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ?  "signup" : "signin"}` , postInput);
      const jwt = (await response).data;
      localStorage.setItem("token" , jwt);
      navigate("/blogs");
    }
    catch(e){
      {type === 'signin' ? setAlertMessage("Please Enter valid credentials") : setAlertMessage("Please check -> Email , password (at least of 6 characters)")}
      setShowAlert(true);
    }
    
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg rounded bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold">
          {type === "signin" ? "Log in" : "Create a new account"}
        </h1>
        <p className="mt-2 text-sm">
          {type === "signin" ? "Create a new account" : "Already have an account?"}
          {"   "}
          <Link className="font-medium text-blue-600 hover:underline" to={type === "signin" ? "/Signup" : "/Signin"}>
            {type === "signin" ? "Sign Up" : "Sign in"}
          </Link>
        </p>

        <p className="mt-8 space-y-6">
            {type === "signup" ? <LabelInputs label="UserName" placeholder="Enter your username" onChange={(e) => {
                setPostInput({
                    ...postInput,
                    name : e.target.value,
                })
            }} /> : null }
            
            <LabelInputs label="Email" placeholder="abc@example.com" onChange={(e) => {
                setPostInput({
                    ...postInput,
                    username : e.target.value,
                })
            }} />

            <LabelInputs label="Password" placeholder="Enter your password" type = "password" onChange={(e) => {
                setPostInput({
                    ...postInput,
                    password : e.target.value
                })
            }} />

            <button
                onClick={sendRequest}
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="submit">
                {type === "signup" ? "Sign up" : "Sign in"}
            </button>
            
        </p>
        {showAlert && (
          <CustomAlert
              message={alertMessage}
              onClose={() => setShowAlert(false)}
           />
        )}
      </div>

    </div>
  );
};

interface LabelInputsType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type? : string
}

function LabelInputs({ label, placeholder, onChange , type }: LabelInputsType) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        id={label}
        placeholder={placeholder}
        type={type || "text"}
        onChange={onChange}
      />
    </div>
  );
}
