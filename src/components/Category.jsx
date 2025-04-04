import React from 'react'
import CategoryCard from './CategoryCard'
import fruits from "../assets/fruits.png"
import vegetables from "../assets/vegetabels.png"
import dairy from "../assets/dairy.png"
import bakery from "../assets/bakery.png"
import meat from "../assets/meat.png"
import beverages from "../assets/beverages.png"

const Category = () => {
  return (
    <div>
       <section className="py-12 bg-gray-50 px-6 md:px-0">
          <div className="max-w-6xl  mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <CategoryCard name="Fruits" image={fruits} href="/shop" />
              <CategoryCard
                name="Vegetables"
                image={vegetables}
                href="/shop"
              />
              <CategoryCard name="Dairy" image={dairy} href="/shop" />
              <CategoryCard name="Bakery" image={bakery} href="/shop" />
              <CategoryCard name="Meat" image={meat} href="/shop" />
              <CategoryCard name="Beverages" image={beverages} href="/shop" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Category
