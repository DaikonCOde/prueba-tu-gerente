import {useState, useEffect} from 'react'

import DataQuestions from '../../db/questions.json';

import { ContentModal } from './ModalStyles';


const Modal = ({ closeModal, user }) => {
    console.log(user.answers);
  const fields = [
    {
      id: 1222,
      label: 'Nombre',
      value: user.name + ' ' + user.lastName
    },
    {
      id: 3322,
      label: 'Correo',
      value: user.email
    },
    {
      id: 63311,
      label: 'Teléfono',
      value: user.phone
    },
    {
      id: 12345432,
      label: 'Provincia',
      value: user.address
    },
  ]
  // const parseAnswers = () => {
    
  //   const list = DataQuestions.map( (q, i) => {
      
  //     const answer = q.options.filter( ans => ans.id === user.answers[i].id_option )

  //     return {
  //       label: q.label,
  //       answer:  i === 0 ? answer[0].src_img : answer[0].label
  //     }
  //   } ) 

  //   return list
  // }

  // const getAnswerList = parseAnswers();


  return (
    <ContentModal >
      <div className="modal">
        <div className="body">
          <h4 className='title'>Datos del usuario</h4>
          <div className="content-fields">
            {
              fields.map( field => (
                <div className="field" key={field.id}>
                  <label htmlFor={field.id}>{field.label}</label>
                  <input 
                    type="text" 
                    id={field.id}
                    value={field.value}
                    disabled
                  />
                </div>
              ) )
            }
          </div>

          <h4 className='answers'>Respuestas</h4>
          <ul className='list-answer'>
            {
              !user?.answers.length
                ? <div>No hay respuestas</div>
                : user?.answers.map( (ans) => (
                <li className='list' key={ans.answer}>
                  <span className='label'>{ans.label}</span>
                  <span className='answer'>{ans.answer}</span>
                </li>
              ) )
            }
          </ul>

          <h4 className='answers'>Imagenes</h4>
          
          <ul className='list-image'>
            {
              !user?.images || !user?.images.length  
              ? <li>No hay imagenes</li>
              : user.images.map( (img) => (
                <li className='list'>
                  <img src={img} alt="" />
                </li>
              ) )
            }
          </ul>

        </div>
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </ContentModal>
  )
}

export default Modal