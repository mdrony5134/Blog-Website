import { useEffect, useState } from "react"
import  axios  from 'axios';
import BlogCard from "./BlogCard";

const BlogPage = () => {
    const [blogData, setBlogData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isActiveCategory, setIsActiveCategory] = useState(false)

    let API = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
    
    const getBlogData = async() =>{
        setIsLoading(true)
      try {
        if(selectedCategory){
            API += `&category=${selectedCategory}`
        }
        const {data} = await axios.get(API)
        setBlogData(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    
    useEffect(()=>{
      getBlogData()
    },[currentPage, pageSize, selectedCategory])

    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    const handleCategoryChange = (category) =>{
        setSelectedCategory(category)
        setCurrentPage(1)
        setIsActiveCategory(category)
    }


  
  return (
    <div className="max-w-7xl mx-auto px-4">
        <div>Category</div>

        {/* all blog section */}
        <div>
            <BlogCard blogData={blogData} isLoading={isLoading} currentPage={currentPage} pageSize={pageSize} selectedCategory={selectedCategory} />
        </div>

        {/* pagination */}
        <div>pagination</div>
    </div>
  )
}

export default BlogPage