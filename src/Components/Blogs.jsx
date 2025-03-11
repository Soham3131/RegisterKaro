import React from "react";
import { ArrowUpRight } from "lucide-react"; 
import aa from "../assets/aa.png";
import bb from "../assets/bb.png";
import cc from "../assets/cc.png";
import dd from "../assets/dd.png";
import ee from "../assets/ee.png";
import ff from "../assets/ff.png";

const blogs = [
  {
    id: 1,
    author: "Prabhash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small Business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3× Super Bowl winning Dynasty?",
    tags: [
      { name: "Tax & Audit", color: "bg-[#F9F5FF] text-purple-700" },
      { name: "Management", color: "bg-[#F8F9FC] text-[#363F72]" },
    ],
    image: aa,
  },
  {
    id: 2,
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: [
      { name: "Tax", color: "bg-[#F0F9FF] text-[#026AA2]" },
      { name: "Research", color: "bg-[#EEF4FF] text-[#3538CD]" },
      { name: "Compliance", color: "bg-[#FFF6ED] text-[#C4320A]" },
    ],
    image: bb,
  },
  {
    id: 3,
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: [
      { name: "Audit", color: "bg-[#F9F5FF]text-[#6941C6]" },
      { name: "Money Back", color: "bg-[#EEF4FF] text-[#3538CD]" },
    ],
    image: cc,
  },
  {
    id: 4,
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: [
      { name: "Money", color: "bg-[#F9F5FF] text-purple-700" },
      { name: "Management", color: "bg-[#F8F9FC] text-[#363F72]" },
    ],
    image: dd,
  },
  {
    id: 5,
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: [
      { name: "Tax Return", color: "bg-[#ECFDF3] text-[#027A48]" },
      { name: "News", color: "bg-[#FDF2FA] text-[#C11574]" },
    ],
    image: ee,
  },
  {
    id: 6,
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: [
      { name: "Private Limited Company", color: "bg-[#F9F5FF] text-[#6941C6]" },
      { name: "Customer Success", color: "bg-[#F8F9FC] text-[#363F72]" },
    ],
    image: ff,
  },
];

const Blogs = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 px-6 bg-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <p className="text-sm text-orange-500 uppercase tracking-widest font-semibold">
          Explore Our Blogs
        </p>
        <h2
          className="font-inter font-bold text-[32px] leading-[38.4px] tracking-[0.16px] text-black"
          style={{ textAlign: "center", verticalAlign: "middle" }}
        >
          Accelerate Digital Transformation
        </h2>
      </div>

      {/* Blog Cards Container */}
      <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-0">
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[200px] object-cover"
            />
            
            {/* Blog Content */}
            <div className="p-5">
              <p className="text-sm text-gray-500">
                {blog.author} • {blog.date}
              </p>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {blog.title}
                </h3>
                {/* Arrow Icon */}
                <ArrowUpRight className="text-gray-700 w-5 h-5" />
              </div>
              <p className="text-gray-600 text-sm mt-2">{blog.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap mt-3 gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs rounded-full  ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button className="mt-10 px-6 py-2 bg-[#1C4670] text-white font-semibold rounded-lg hover:bg-blue-700 transition">
        Show more blogs →
      </button>
    </div>
  );
};

export default Blogs;
