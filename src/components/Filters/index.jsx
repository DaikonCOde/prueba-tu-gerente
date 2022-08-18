import React from 'react'
import { ContentFilters } from './FiltersStyles'

const filters = [
  {
    id: 1234,
    label: 'Nombre',
    value: 'nombre'
  },
  {
    id: 23122,
    label: 'Razón Social',
    value: 'razon_social'
  },
  {
    id: 87212,
    label: 'NIT',
    value: 'nit'
  },
  {
    id: 7123,
    label: 'Teléfono',
    value: 'telefono'
  },
  {
    id: 8221,
    label: 'Código',
    value: 'codigo'
  },
]

const Filters = ({ filterBy, setFilterBy }) => {


  return (
    <ContentFilters>
      <span>Filtrar por:</span>
      <div className="list-of-filters">
        {
          filters.map(option => (
            <div className="filter-by" key={option.id}>
              <input 
                type="radio" 
                name="filter" 
                id={option.id} 
                value={option.value} 
                onChange={ e => setFilterBy(e.target.value) } 
                checked={ filterBy === option.value }
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))
        }
      </div>
    </ContentFilters>
  )
}

export default Filters