
const Comments = async() => {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <div>Comments</div>
  )
}

export default Comments