import React, {useState, useEffect} from 'react'

import { setNewUser } from '../../utils/setNewUser';
import Loader from '../Loader';

import { ContentModal } from './ModalStyles';

const fields = [
  {
    id: 1222,
    label: 'Nombre',
    value: 'nombre'
  },
  {
    id: 3322,
    label: 'Razón Social',
    value: 'razon_social'
  },
  {
    id: 63311,
    label: 'NIT',
    value: 'nit'
  },
  {
    id: 28833,
    label: 'Teléfono',
    value: 'telefono'
  },
  {
    id: 9331,
    label: 'Código',
    value: 'codigo'
  }
]

const Modal = ({ closeModal, currentValue, filterBy }) => {
  const [ loading, setLoading] = useState(false)
  const [ values, setValues ] = useState({
    nombre: '',
    razon_social: '',
    nit: '',
    telefono: '',
    codigo: '',
    
  })

  useEffect( () => {
    setValues({
      ...values,
      [filterBy]: currentValue
    })
  }, [] )


  const handleValue = (e) => {
    const value = e.target.value
    const name = e.target.name

    setValues({
      ...values,
      [name]: value.toLowerCase()
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    await setNewUser(values)

    setLoading(false)
    closeModal()
  }

  return (
    <ContentModal >
      <div className="modal">
        <h4 className='title'>Agregar nuevo usuario</h4>

        <form onSubmit={handleSubmit}>
          {
            fields.map( field => (
              <div className="field" key={field.id}>
                <label htmlFor={field.value}>{field.label}</label>
                <input 
                  type="text" 
                  name={field.value}
                  id={field.value}
                  value={values[field.value]} 
                  onChange={ handleValue }
                  required
                />
              </div>
            ) )
          }

          {
            loading 
              ? <Loader />
              : <button type="submit">Guardar</button>
          }
        </form>

      </div>
      <div className="overlay" onClick={closeModal}></div>
    </ContentModal>
  )
}

export default Modal