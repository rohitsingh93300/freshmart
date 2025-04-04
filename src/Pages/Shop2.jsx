import React from 'react'
import FilterSidebar from '../components/FilterSidebar'
import { Search } from 'lucide-react'

const Shop2 = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Fresh Groceries</h1>
                <p className="text-muted-foreground">
                    Browse our selection of fresh, high-quality groceries delivered to your door.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-end justify-between">
                    <div className="relative w-full sm:max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input placeholder="Search products..." className="pl-10" />
                    </div>
                    {/* <SortDropdown /> */}
                </div>
            </div>
            <div className='flex '>
                <FilterSidebar />

            </div>
        </div>
    )
}

export default Shop2
