import React,{useContext} from 'react'
import { UserContext } from '../Context'


function ChildC() {

    const user = useContext(UserContext);

  return (
    <div>
        {user.name}
    </div>
  )
}

export default ChildC