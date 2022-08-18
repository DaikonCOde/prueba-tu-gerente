// hooks
import React, {useState, useEffect, useRef} from 'react';
// components
import Filters from './components/Filters';
import Dropdown from './components/Dropdown'
import Modal from './components/Modal';
// utils
import { getFilteredData } from './utils/getFilteredData';
// styles
import { ContentApp } from './AppStyles';


const App = () => {

  const [valueToDropdown, setValueToDropdown ] = useState('');
  const [ filterBy, setFilterBy ] = useState('nombre')
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ lastVisible, setLastVisible ] = useState(null)
  const [ result, setResult ] = useState({
    loading: false,
    data: [],
    loading_more: false
  })

  useEffect(() => {
    setValueToDropdown('');
  }, [filterBy])


  // primer llamado a la api
  useEffect( () => {
    if ( valueToDropdown.length <= 0 ) {
      setResult({
        ...result,
        data: []
      })
      return
    } else {
      setResult({
        ...result,
        loading: true
      }
      )
      // llamado a la api con los filtros
      const getData = async () => {
        const data = await getFilteredData(filterBy, valueToDropdown, lastVisible, setLastVisible)
        
        setResult({
          ...result,
          loading: false,
          data: [
            ...result.data,
            ...data
          ]
        })
      }

      getData()

    }
  }, [valueToDropdown] )


  const lastElementRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  // generando infinity scroll
  useEffect( () => {
    if( !lastVisible ) return ;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting ) {

        // codigoo para llamar a la funcion 
        setResult({
          ...result,
          loading_more: true
        }
        )
        // llamado a la api con los filtros
        const getData = async () => {
          const data = await getFilteredData(filterBy, valueToDropdown, lastVisible, setLastVisible)
          
          setResult({
            loading: false,
            loading_more: false,
            data: [
              ...result.data,
              ...data
            ]
          })

          observer.unobserve(lastElementRef.current);
      }
  
      getData()

      }
    }, options)

    if (lastElementRef.current) observer.observe(lastElementRef.current)

  }, [lastElementRef.current, result.data ])

  const changeValueToDropdown = (e) => {
    setValueToDropdown(e.target.value);
    setLastVisible(null)
    setResult({
      ...result,
      data: []
    })
  }

  return (
    <ContentApp>
      <h1 className='title'>Prueba técnica</h1>
      <Filters filterBy={filterBy} setFilterBy={setFilterBy} />

      <Dropdown 
        value={valueToDropdown} 
        changeValue={changeValueToDropdown } 
        result={result} 
        filterBy={filterBy} 
        openModal={ () => setModalIsOpen(true) } 
        lastElement={lastElementRef}
        />

      {
        modalIsOpen && (
          <Modal closeModal={ () => setModalIsOpen(false) } currentValue={valueToDropdown} filterBy={filterBy} />
        )

      }
    </ContentApp>
  )
}

export default App