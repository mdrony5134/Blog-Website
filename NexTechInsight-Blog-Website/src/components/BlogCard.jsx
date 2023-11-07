import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const BlogCard = ({ blogData, isLoading, currentPage, pageSize, selectedCategory }) => {
  const filterData = blogData;
  return isLoading ? (
    <div className="text-2xl font-bold text-gray-800">Loading...</div>
  ) : (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filterData.map((blog) => {
        return (
          <Link key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
            <div>
              <img src={blog.image} className="w-full" />
            </div>
            <h2 className="font-bold mt-4 mb-2 hover:text-blue-600">
              {blog.title}
            </h2>
            <p className="mb-2 text-sm text-gray-700 inline-flex items-center">
              <FaUser className="mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Reading Time: {blog.reading_time}
            </p>
            <p className="text-sm text-gray-700">
              Publish: {blog.published_date}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogCard;
