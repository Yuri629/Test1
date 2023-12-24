/*====================Send message to the email===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

//declare the sendEmail function
const sendEmail = (e) => {
    //prevent the default behavior of the form
    e.preventDefault()

    //send the form data using emailjs
    //serviceID - templateID - #form - publicKey(it is in the EmailJS side bar = account)
    emailjs.sendForm('service_4dvqzzg','template_ozuycat','.contact_form','IAq16adwb63V6UeNa')
        .then(() =>{
            //Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'
            console.log('successfully')

            //Remove the message after five seconds
            setTimeout(() => 
            {
                //set time with function and milisecond
                //how many second need to add on x000, such as 3000 = 3 second
                contactMessage.textContent = ''}, 5000)

                //Clear input file
                contactForm.reset()

            },() => {
                //show error message
                contactMessage.textContent = 'Message sent unsucessfully ❌'
                
            })
}

//send the conatctForm to my email
contactForm.addEventListener('submit',sendEmail)