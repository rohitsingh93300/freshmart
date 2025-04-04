import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({name,image, href}) => {
  return (
    <Link to={href}>
    <div className="overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-xl">
      <div className="p-0">
        <div className="aspect-square relative bg-gray-200">
          <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-medium">{name}</h3>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default CategoryCard
