$(document).ready(()=>{
    $('#optionAdiv').toggle()

    $('#optionA').click(()=>{
        $('#optionAdiv').toggle()
        if ($('#optionBdiv').is(':visible')){
            $('#optionBdiv').toggle()
        }
        console.log('clicked')
    })

    $('#optionBdiv').toggle()

    $('#optionB').click(()=>{
        $('#optionBdiv').toggle()
        if ($('#optionAdiv').is(':visible')){
            $('#optionAdiv').toggle()
        }
        console.log('clicked')
    })
    const totalA = 38500
    const totalB = 40000

    $('#optionAselect').change(()=>{
        console.log('changed')
        const firstPayment = totalA*35/100
        const secondPayment = totalA*25/100
        const thirdPayment = totalA*30/100
        const lastPayment = totalA*10/100
        if ($('#optionAselect').is(':checked')){       
            $('#totalPayment').text("₪" + totalA.toLocaleString())
            $('#firstPayment').text("₪" + firstPayment.toLocaleString())
            $('#secondPayment').text("₪" + secondPayment.toLocaleString())
            $('#thirdPayment').text("₪" + thirdPayment.toLocaleString())
            $('#lastPayment').text("₪" + lastPayment.toLocaleString())
        }
    })
    $('#optionBselect').change(()=>{
        console.log('changed')
        const firstPayment = totalB*35/100
        const secondPayment = totalB*25/100
        const thirdPayment = totalB*30/100
        const lastPayment = totalB*10/100
        if($('#optionBselect').is(':checked')){
            $('#totalPayment').text("₪" + totalB.toLocaleString())
            $('#firstPayment').text("₪" + firstPayment.toLocaleString())
            $('#secondPayment').text("₪" + secondPayment.toLocaleString())
            $('#thirdPayment').text("₪" + thirdPayment.toLocaleString())
            $('#lastPayment').text("₪" + lastPayment.toLocaleString())
        }
    })



})