import { Link } from "react-router-dom"
import { convert } from 'html-to-text';


interface BlogCardProps {
    id : string,
    authorName : string,
    title : string,
    content : string ,
    publishedDate : string
    update : boolean
}


export const BlogCard = ({
    id,
    authorName ,
    title ,
    content ,
    publishedDate,
    update 
} : BlogCardProps) => {
    return < Link to={update === true ? `/myblogs/update/${id}` : `/blog/${id}`}>
        <div className="flex justify-center">
            <div className="bg-slate-100 p-5 rounded-lg w-4/5">

                    <div>
                        <Avatar name = {authorName} />  {authorName} . {" "} {publishedDate}
                    </div>

                    <div className="text-xl font-semibold ">
                        {title}
                    </div>

                    <div className="text-lg font-thin">
                        {convert(content).slice(0 , 200) + "..."}
                    </div> 

                    <div className="bg-white w-fit rounded-md px-2">
                        {`${Math.ceil(content.length / 100)} minutes`}
                    </div>
            </div>

        </div>
    </Link>
      
}

export function Avatar({ name, onClick }: { name: string; onClick?: () => void }) {
    return (
      <div
        onClick={onClick}
        className="inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
      >
        <span className="font-normal text-gray-600 dark:text-gray-300">{name[0]}</span>
      </div>
    );
  }
  