const endDate = "25 March 2025 10:00 pm"

document.getElementById("end_date").innerText = endDate
const inputs = document.querySelectorAll("input")

function  clock(){

    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000
    inputs[0].value = Math.floor(diff / 3600 / 24)
}

clock();