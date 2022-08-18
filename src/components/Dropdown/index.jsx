import React, {useState, useEffect } from 'react'

import Loader from '../Loader';

import { ContentSelectFilter } from './dropdownStyles';
import { MdOutlineAdd } from 'react-icons/md'

const Dropdown = ({ value, result, changeValue, filterBy, openModal, lastElement }) => {

  const [ isOpenOptions, setIsOpenOptions] = useState(false);

  useEffect( () => {
    if( value.length <= 0 ) {
      setIsOpenOptions(false)
    } else {
      setIsOpenOptions(true)
    } 
  }, [ value ] )

  return (
    <ContentSelectFilter  filterBy={filterBy} >
      <input 
        type="text" 
        name="select" 
        placeholder='Buscar' 
        value= {value}
        onChange={changeValue }
      />
        {isOpenOptions && (
            <ul className="list">

              <button className='add-button' onClick={openModal}>
                Agregar
                <i>
                  <MdOutlineAdd />
                </i>
              </button>
              
              <div className='results' >
                {
                  result.loading 
                    ? <div className='state'> <Loader /> </div>
                    : result.data.length <= 0
                      ? <div className='state'>No se encontro nada</div> 
                      : <>
                        {
                          result.data.map((item, i) => {
                            if (result.data.length === i + 1 ) {
                              return (
                                <li key={item.id} ref={ lastElement } className='item' onClick={ () => setIsOpenOptions(false) }  >
                                  <span className='nombre' >{item.nombre}</span>
                                  <span className='razon_social'>{item.razon_social}</span>
                                  <span className='nit'>{item.nit}</span>
                                  <span className='telefono'>{item.telefono}</span>
                                  <span className='codigo'>{item.codigo}</span>
                                </li>
                              )
                            } else {
                              return (
                                <li key={item.id} className='item' onClick={ () => setIsOpenOptions(false) }  >
                                  <span className='nombre' >{item.nombre}</span>
                                  <span className='razon_social'>{item.razon_social}</span>
                                  <span className='nit'>{item.nit}</span>
                                  <span className='telefono'>{item.telefono}</span>
                                  <span className='codigo'>{item.codigo}</span>
                                </li>
                              )
                            }
                          }
                          )
                        }
                        {
                          result.loading_more && ( <div className="state"><Loader /></div>)
                        }
                      </> 
                      
                }
              </div>

            </ul>
          )}
    </ContentSelectFilter>
  )
}

export default Dropdown