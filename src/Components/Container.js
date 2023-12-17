
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import { useGlobalContext } from '../Context'



const Container = () => {

const {query, setQuery, isError} = useGlobalContext();
  return (
    <>
    

    <div className='section'>

        <h2>OpenMovie</h2>
    <form action='#' onSubmit={(e) =>e.preventDefault()}>

    <div className="search_bar">
      
        <input type="search"
         placeholder='Search in...'
        value={query}
        onChange={(e) => setQuery(e.target.value)} />

        <img src="./social-icons.svg" alt="" />
      
    </div>
    </form>
    <div>
      <p>{isError.show && isError.msg}</p>
    </div>

    <div className="social_icons">

    <AiFillInstagram className='icon'/>
     <AiFillGithub className='icon'/>
      <AiFillTwitterCircle className='icon'/>
     <AiFillYoutube className='icon'/>
      
    </div>
    
    
    


    

      
    </div>
      
    </>
  )
}

export default Container

