import ProfileImg from "../../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"
import {AiOutlineArrowUp,AiOutlineComment, AiOutlineShareAlt,AiOutlineArrowRight} from "react-icons/ai"
import Link from "next/link"
import Image from 'next/legacy/image'
import { Post } from "@/util/types"
import { formatRelative } from "date-fns"
import { enUS } from "date-fns/locale"


const formatRelativeLocale = {
    lastWeek: "eeee",
    yesterday: "'Yesterday",
    today: "p",
    other: "MM/dd/yy",
  };

interface PostProps {
    content: Array<Post>
}

const Post:React.FC<PostProps> = ({content}) => {
    
    const sortedPosts = [...content].sort((a,b) => b.updatedAt.valueOf()-a.updatedAt.valueOf()) 
    
    return (
        sortedPosts.map(post => (
            
            <div key={post.id} className="blog-post flex flex-row mt-4 mr-2 md:pr-4 tablet:pr-16 ">
                
            <div className="post-sidebar hidden md:block">
                <div className="post-author hidden md:block relative group">
                
                    <Image width={48} height={48} alt={`Photo of author: ${post.author.username}`} src={post.author.image as string} priority className="w-12 h-12 object-cover rounded-lg opacity-90 hover:opacity-100 cursor-pointer" />
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-forth-bg text-primary-font text-sm rounded-lg shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 py-1 px-3 min-w-max">
                        {post.author.username ? post.author.username : post.author.name}
                    </div>
                </div>
                <button className="post-reactions flex justify-center items-center border border-second-bg hover:bg-second-bg cursor-pointer w-12 h-12 my-2 rounded-lg text-third-font">
                    <div className="">
                        <AiOutlineArrowUp/>
                        <p className="m-0">15</p>
                    </div>
                </button>
            </div>

            <div className="post-content bg-second-bg hover:bg-forth-bg w-full ml-2 md:ml-8 rounded-lg cursor-pointer">
                <div className="post-header p-4 flex justify-between items-center">
                    <div className="flex flex-row gap-4 justify-center items-center">
                        
                        <div className="block md:hidden">
                            <Image width={48} height={48} alt={`Photo of author: ${post.author.username}`} src={post.author.image as string} priority className="w-12 h-12 object-cover rounded-lg opacity-90 hover:opacity-100 cursor-pointer " />        
                        </div>
                    
                        <h2 className="post-category text-sm text-second-font hover:underline cursor-pointer ">Photography</h2>
                    </div>
                    
                    <p className="post-added text-third-font text-xs m-0">
                        
                    {formatRelative(new Date(post.updatedAt), new Date(), {
                        locale: {
                        ...enUS,
                        formatRelative: (token) =>
                            formatRelativeLocale[
                            token as keyof typeof formatRelativeLocale
                            ],
                        },
                    })}
                    </p>
                </div>
                {post.image && (
                    <div className="post-img" style={{width: '100%', height: '24rem', position: 'relative'}}>
                         <Image alt={`image of post:${post.title ? post.title: post.desc}`} priority layout="fill" objectFit="cover" src={ProfileImg.src} />
                     </div>   
                )}
                
                {post.title && (
                    <div className="post-title p-4 text-second-font">
                    <h1 className="post-t text-lg hover:underline">
                        <Link href="/">
                             {post.title}
                             
                             
                        </Link> 
                    </h1>
                </div>
                )}
                

                <div className="post-content px-4 text-third-font">
                    <p className="post-c">{post.desc}</p>
                </div>

                <div className="post-actions px-4 py-2 flex flex-row justify-between text-third-font flex-wrap">
                    <div className="flex flex-row gap-4">
                        <button className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                            <AiOutlineComment/>
                            <p className="m-0 hidden xs:block">8 Comments</p>
                        </button>
                        <button className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                            <AiOutlineShareAlt/>
                            <p className="m-0 hidden xs:block">Share</p>
                        </button>
                        <button className="post-action md:hidden flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                            <AiOutlineArrowUp/>
                            <p className="m-0">15</p>
                        </button>
                    </div>
                    <button className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                        <AiOutlineArrowRight/>
                        <p className="m-0">Read more</p>
                    </button>
                </div>
            </div>
        </div>
        ))
        
    )
}

export default Post