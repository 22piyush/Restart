import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './button.css'

function Footer() {

    const {page , handlePageChange, totalPages} = useContext(AppContext);

  return (
    <>
        <section>
            <div style={{height:'50px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <div style={{width:'60%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div>
                        
                        {
                            page < totalPages && (<button className='button' onClick={()=>handlePageChange(page + 1)}>Next</button>)
                        }
                        {
                            page > 1 && (<button className='button' onClick={()=>handlePageChange(page - 1)}>Previous</button>)
                        }
                        
                    </div>
                    <div>
                        <p>Page {page} of {totalPages}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer