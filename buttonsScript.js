$(document).ready(() => {
    const whatsapp = $('#whatsApp')
    const callMe = $('#callMe')
    const gmail = $('#gmail')
    const buttons = [whatsapp, callMe, gmail]

    for (let btn = 0; btn < buttons.length; btn++) {
        $(buttons[btn]).on('mouseover', () => {
            $(buttons[btn]).css('width', '52px')
            $(buttons[btn]).css('height', '52px')
        })
    }
    for (let btn = 0; btn < buttons.length; btn++) {
        $(buttons[btn]).on('mouseout', () => {
            $(buttons[btn]).css('width', '50px')
            $(buttons[btn]).css('height', '50px')
        })
    }

    function call() {
        window.location.href = "tel:+972549832002";
    }

    callMe.on('click', () => {
        call()
    })

    function whatsAppMe() {
        const phoneNumber = "972549832002";
        const message = encodeURIComponent("היי איתי, אשמח אם תחזור אלי.");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }

    whatsapp.on('click', () => {
        whatsAppMe()
    })
})
