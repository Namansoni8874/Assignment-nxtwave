import React, { useState, useRef, useEffect } from 'react'
import FilterSidebar from '../components/FilterSidebar'
import ProductList from '../components/ProductList'

const defaultFilters = {
  'IDEAL FOR': [],

}

const sortOptions = [
  { label: 'RECOMMENDED', value: 'recommended' },
  { label: 'NEWEST FIRST', value: 'newest' },
  { label: 'POPULAR', value: 'popular' },
  { label: 'PRICE : HIGH TO LOW', value: 'price_high' },
  { label: 'PRICE : LOW TO HIGH', value: 'price_low' },
]

const Home = () => {
  const [showFilter, setShowFilter] = useState(true)
  const [filters, setFilters] = useState(defaultFilters)
  const [productCount, setProductCount] = useState(0)
  const [sort, setSort] = useState('recommended')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // FilterSidebar update
  const handleFilterChange = (label, values) => {
    setFilters((prev) => ({ ...prev, [label]: values }))
  }

  // ProductList
  const handleProductCount = (count) => {
    setProductCount(count)
  }

  // Dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  return (
    <div>
      {/* Hero Description Section  */}
      <div className="flex flex-col items-center justify-center text-center my-8 gap-3">
        <h1 className="text-3xl md:text-5xl font-normal tracking-wide">DISCOVER OUR PRODUCTS</h1>
        <p className="max-w-xl mx-auto text-gray-700 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6 py-2 border-gray-300  border-b border-t  bg-white text-sm  md:gap-0">
        <div className="font-semibold hidden md:block">{productCount} ITEMS</div>
        <div className="flex gap-2 md:gap-4 items-center justify-center">
          <button
            className=" px-4 py-1 rounded font-semibold"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            {showFilter ? '<<HIDE FILTER' : '>>SHOW FILTER'}
          </button>
          <div className="relative" ref={dropdownRef}>
            <button
              className=" px-4 py-1 rounded font-semibold flex items-center  min-w-[160px] justify-between"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {sortOptions.find(opt => opt.value === sort)?.label || 'RECOMMENDED'} <span className="text-xs">▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 md:left-auto md:right-0 mt-2 w-full md:w-56 bg-white shadow-lg border rounded z-50 py-2 animate-fade-in overflow-auto max-h-72">
                {sortOptions.map(opt => (
                  <button
                    key={opt.value}
                    className={`w-full text-left px-5 py-2 font-semibold hover:bg-gray-100 flex items-center gap-2 ${sort === opt.value ? 'text-black' : 'text-gray-700'}`}
                    onClick={() => { setSort(opt.value); setDropdownOpen(false) }}
                  >
                    {sort === opt.value && <span className="text-lg mr-2">✔</span>}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-0 gap-4">
        {/* Desktop FilterSidebar */}
        {showFilter && (
          <div className="hidden md:block md:w-60 md:border-r">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          </div>
        )}
        <div className={showFilter ? "flex-1 md:w-3/4" : "flex-1 md:w-full"}>
          <ProductList filters={filters} onProductCount={handleProductCount} showFourCols={!showFilter} sort={sort} />
        </div>
      </div>
    </div>
  )
}

export default Home 