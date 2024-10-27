$(document).ready(()=>{
const client = "יששכר ברזילי"
$('.client').text(client)

const contractor = "איתי חתואל"
$('.contractor').text(contractor)


function zoomOut() {
    document.body.style.transform = "scale(0.95)"; // Adjust scale as desired (0.8 = 80% zoom)
    document.body.style.transformOrigin = "top center"; // Sets the origin of scaling
}
// zoomOut()
const square = (x, y) => {
    return x * y
}


const runningMeter = (length_A, length_B, width_A, width_B, height) => {
    const length = length_A + length_B
    const width = width_A + width_B
    return (length + width) * height
}

const result = Math.round(runningMeter(220, 240, 360, 380, 260))

})
