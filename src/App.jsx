// hooks
import React, { useState } from 'react';
// components
import Modal from './components/Modal';
import { Tabla } from './components/Tabla';
// utils
import { useGetUsers } from './utils/getFilteredData';
// styles
import { ContentApp } from './AppStyles';


const App = () => {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ list, exportList, isLoading ] = useGetUsers();
  const [ dataUser, setDataUser ] = useState(null);

  const handleSelectUserInfo = (id) => {
    const searchUser = list.filter( user => user.id === id );
    setDataUser(searchUser[0]);
    setModalIsOpen(true);
  }

  return (
    <ContentApp>
      <h1 className='title'>Usuario registrados</h1>

      <Tabla data={list} handleSelectUserInfo={handleSelectUserInfo} exportList={exportList}/>

      {
        modalIsOpen && (
          <Modal closeModal={ () => {
            console.trace()
            setModalIsOpen(false) 
            console.log('hola');
          } 
          } user={dataUser} />
        )

      }
    </ContentApp>
  )
}

export default App