export const checkLogInputError = (val, placeholder) => {
    if (val.length < 4) {
        return 'need more characters'
    }
    if (placeholder === 'Name' && val.length > 4) {
        return
    }
    if (placeholder === 'Email Address') {
        if (val.includes('@') && val.includes('.') && val.length > 4) {
            return
        }
        return 'wrong email'
    }
    if (placeholder === 'Password' && val.length > 4) {
        let check = new RegExp('(?=.*[A-Z])[0-9a-zA-Z]{8,}$')
        if (!check.test(val)) {
            return 'Weak password'
        }
        return
    }
}
