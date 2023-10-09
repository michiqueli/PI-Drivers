const regexname = /[A-Z][a-z]{2,}/
const regexlastName = /[A-Z][a-z]{2,}/
const regexdesc = /.{50,}/
const regexnatio = /[A-Z][a-z]{3,}/
<<<<<<< HEAD
const regeximage = /^[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
=======
const regeximage = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624

const validate = (form) =>{

    const errors = {}

    if (!form.name) errors.name = "Empty name"
    else if (!regexname.test(form.name)) errors.name = "Invalid name"
    else errors.name = "ok"

    if (!form.lastName) errors.lastName = "Empty lastName"
    else if (!regexlastName.test(form.lastName)) errors.lastName = "Invalid lastName"
    else errors.lastName = "ok"

    if (!form.description) errors.description = "Empty Description"
    else if (!regexdesc.test(form.description)) errors.description = "Description too Short"
    else errors.description = "ok"

    if (!form.nationality) errors.nationality = "Empty Nationality"
    else if (!regexnatio.test(form.nationality)) errors.nationality = "Invalid Nationality"
    else errors.nationality = "ok"
    
    if (!form.image) errors.image = "Empty URL"
    else if (!regeximage.test(form.image)) errors.image = "Invalid URL"
    else errors.image = "ok"
    return errors
}
export default validate;