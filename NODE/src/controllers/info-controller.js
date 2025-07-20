const info = (req,res) =>{
    return res.json({
        success:true,
        Message:"API is Alive",
    })
}

module.exports = {
    info 
}