import React from 'react'

const FilterSidebar = () => {
  return ( 
    <div className="space-y-6 sticky top-20">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button variant="ghost" size="sm" className="h-8 text-sm">
          Clear all
        </button>
      </div>

      {/* <Accordion type="multiple" defaultValue={["categories", "price", "dietary"]}>
        <AccordionItem value="categories"> */}
          <h1>Categories</h1>
          <div>
            <div className="space-y-2">
              {[
                "Fruits & Vegetables",
                "Dairy & Eggs",
                "Meat & Seafood",
                "Bakery",
                "Pantry",
                "Beverages",
                "Frozen Foods",
              ].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  {/* <Checkbox id={`category-${category}`} /> */}
                  <input type="checkbox" name="" id="" />
                  <label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        {/* </AccordionItem> */}

        {/* <AccordionItem value="price"> */}
          <h1>Price Range</h1>
          <div>
            <div className="space-y-4">
              {/* <Slider defaultValue={[0, 100]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} /> */}
              <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
              <div className="flex items-center justify-between">
                {/* <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span> */}
              </div>
            </div>
          </div>
        {/* </AccordionItem> */}

       

      <button className="w-full">Apply Filters</button>
    </div>
    
  )
}

export default FilterSidebar
