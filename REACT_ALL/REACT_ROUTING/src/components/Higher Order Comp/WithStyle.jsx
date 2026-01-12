import React from 'react'

function WithStyle(WrappedComponent) {

    return function NewComponent(props){
        return (
            <div style={{border:'2px solid red', padding:'20px'}}>
                <WrappedComponent {...props}/>
            </div>
        )
    }  

}

export default WithStyle;