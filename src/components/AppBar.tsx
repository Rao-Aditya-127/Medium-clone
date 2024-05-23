import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avatar } from "./BlogCard";
import Logo from "./Logo";

export const AppBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate(); // Import useNavigate hook from react-router-dom

    const createNewBlog = () => {
        navigate("/publish"); // Navigate to /publish route
    };

    const changeBlog = () => {
        navigate("/myblogs"); // Navigate to /myblogs route
    };

    const handleLogout = () => {
        // Clear local storage
        localStorage.clear();
        // Navigate to sign-in page
        navigate("/signin");
    };

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between p-3 m-2 rounded-2xl bg-blend-normal backdrop-blur border drop-shadow">
            <Link to={"/blogs"} className="cursor-pointer flex flex-row">
                <Logo />
                <div className="mt-2 px-4 font-medium">
                    Medium
                </div>
            </Link>
            <div className="m-2 cursor-pointer">
                <Avatar name="Aditya" onClick={() => setShowDropdown(!showDropdown)} />
            </div>
                {showDropdown && (
                    <div className="absolute right-0 mt-10 w-48 bg-white rounded-lg shadow-lg">
                        <div className="py-1">
                            <button
                                onClick={createNewBlog}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                Create New blog
                            </button>
                            <button
                                onClick={changeBlog}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                Update / delete blog
                            </button>
                            <button
                                onClick={handleLogout}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
        </div>
    );
};
