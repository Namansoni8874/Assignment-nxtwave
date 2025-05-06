import React, { useState, useEffect } from 'react'

const filterData = [
  {
    label: 'IDEAL FOR',
    options: [
      { label: 'Men', value: 'men' },
      { label: 'Women', value: 'women' },
      { label: 'Baby & Kids', value: 'kids' },
    ],
  },
  { label: 'OCCASION', options: [] },
  { label: 'WORK', options: [] },
  { label: 'FABRIC', options: [] },
  { label: 'SEGMENT', options: [] },
  { label: 'SUITABLE FOR', options: [] },
  { label: 'RAW MATERIALS', options: [] },
  { label: 'PATTERN', options: [] },
]

const FilterSidebar = ({ filters = {}, onFilterChange = () => {} }) => {
  const [open, setOpen] = useState('IDEAL FOR')
  const [checked, setChecked] = useState(filters)

  useEffect(() => {
    setChecked(filters)
  }, [filters])

  const handleToggle = (label) => {
    setOpen(open === label ? '' : label)
  }

  const handleCheck = (label, value) => {
    let newValues = checked[label] ? [...checked[label]] : []
    if (newValues.includes(value)) {
      newValues = newValues.filter((v) => v !== value)
    } else {
      newValues.push(value)
    }
    setChecked((prev) => ({ ...prev, [label]: newValues }))
    onFilterChange(label, newValues)
  }

  const handleUnselectAll = (label) => {
    setChecked((prev) => ({ ...prev, [label]: [] }))
    onFilterChange(label, [])
  }

  return (
    <aside className="w-full md:w-60 p-4 md:mt-6 mt-2 bg-white border-r">
      <div className="font-bold mb-4 flex items-center gap-2">
        <input type="checkbox" className="accent-black" /> CUSTOMIZABLE
      </div>
      {filterData.map((section) => (
        <div key={section.label} className="mb-2 border-b pb-2">
          <button
            className="w-full flex justify-between items-center font-bold py-2 text-left"
            onClick={() => handleToggle(section.label)}
            type="button"
          >
            {section.label}
            <span className="text-xs">{open === section.label ? '▲' : '▼'}</span>
          </button>
          <div className={`${open === section.label ? 'block' : 'hidden'} pl-2 text-sm`}>
            <div className="text-gray-500 mb-1">All</div>
            {section.options.length > 0 && (
              <>
                <button className="text-blue-500 underline text-xs mb-1" onClick={() => handleUnselectAll(section.label)} type="button">Unselect all</button>
                {section.options.map((opt) => (
                  <div key={opt.value} className="mb-1 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checked[section.label]?.includes(opt.value) || false}
                      onChange={() => handleCheck(section.label, opt.value)}
                      className="accent-black"
                    />
                    <span>{opt.label}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </aside>
  )
}

export default FilterSidebar 