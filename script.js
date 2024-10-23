$(document).ready(()=>{
const client = "יששכר ברזילי"
$('.client').text(client)

const contractor = "איתי חתואל"
$('.contractor').text(contractor)



const square = (x, y) => {
    return x * y
}

console.log(square(2, 4))

const runningMeter = (length_A, length_B, width_A, width_B, height) => {
    const length = length_A + length_B
    const width = width_A + width_B
    return (length + width) * height
}

const result = Math.round(runningMeter(220, 240, 360, 380, 260))
console.log(result)


})
