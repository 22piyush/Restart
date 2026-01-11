import useFetch from './useFetch'

function GetData() {

  const {data, loading, error}  =  useFetch('https://jsonplaceholder.typicode.com/todos');
    
  if(loading) return <h3>Loading........</h3>
  if(error) return <h3>Error Occured</h3>

  
  return (
    <div>
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default GetData