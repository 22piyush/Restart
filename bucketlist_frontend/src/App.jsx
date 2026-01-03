import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App() {

    const [bucketList, setBucketList] = useState([]);

    const [newBucketItem, setNewBucketItem] = useState({
        name:"",
        description:"",
        priority:0,
    })

    const loadBucketList = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/get_bucket_list`)
        setBucketList(response.data.data)
    }

    const markAsComplete = async (id) => {
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/bucketlists/${id}/complete`)
        if (response.data.success) {
            setBucketList(prev =>
                prev.map(item =>
                    item._id === id
                        ? { ...item, isCompleted: true }
                        : item
                )
            );
        }
    }

    const handleChange =(e) =>{
        console.log(e.target.value);
        
        const {name, value} = e.target;

        setNewBucketItem(prev => ({
            ...prev,
            [name]: value
        }))

        
    }

    const addBucketItem =async()=>{
            
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/bucketlist`, newBucketItem)

        setBucketList(prev => [...prev, response.data.data]);

        setNewBucketItem({ name: "", description: "", priority: 0 });

    }

    const deleteBucket = async (id) => {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/bucketlists/${id}/delete`)
        
        if(response.data.success){
            setBucketList(prev => prev.filter(item => item._id !== id))
        }
   
    }

    useEffect(()=>{
        loadBucketList();
    },[])

  return (
    <>

   <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
  <h1 style={{ textAlign: "center", marginBottom: 30 }}>My Bucket List</h1>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 20,
      marginBottom: 40,
      justifyContent: "flex-start", // align items at the start
    }}
  >
    {bucketList.map((listItem) => {
      const { _id, priority, name, isCompleted, description } = listItem;
      return (
        <div
          key={_id}
          style={{
            flex: "0 0 250px", // fixed width for all cards
            backgroundColor: isCompleted ? "#d4edda" : "#f8f8f8",
            borderRadius: 10,
            padding: 15,
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            boxSizing: "border-box", // include padding in width
          }}
        >
          <h2 style={{ marginTop: 0 }}>{name}</h2>
          <p>{description}</p>
          <p>Priority: {priority}</p>
          <p>Status: {isCompleted ? "Completed ✅" : "Pending ❌"}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {!isCompleted && (
              <button
                onClick={() => markAsComplete(_id)}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Mark Complete
              </button>
            )}
            <button
              onClick={() => deleteBucket(_id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    })}
  </div>

  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <h2>Add New Bucket Item</h2>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={newBucketItem.name}
      onChange={handleChange}
      style={{ padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
    />
    <input
      type="text"
      name="description"
      placeholder="Description"
      value={newBucketItem.description}
      onChange={handleChange}
      style={{ padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
    />
    <input
      type="number"
      name="priority"
      placeholder="Priority"
      value={newBucketItem.priority}
      onChange={handleChange}
      style={{ padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
    />
    <button
      onClick={addBucketItem}
      style={{
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: 8,
        borderRadius: 5,
        cursor: "pointer",
      }}
    >
      Add Bucket Item
    </button>
  </div>
</div>


    </>
  )
}

export default App