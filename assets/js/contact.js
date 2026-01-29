/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_or9ff78','template_eqnmdf6','#contact-form','6gaTGzFjZJ0ZP90J-')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully'

            setTimeout(() => {
                contactMessage.textContent = ''
            },5000)

            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message not sent (service error)'
        })
}

contactForm.addEventListener('submit', sendEmail)