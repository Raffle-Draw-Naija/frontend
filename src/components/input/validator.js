const validateInputs = (formData = {}, formErrors = {}, validates = ['*']) => {
    for (const input in formData) {
        // Checks if field validation is required
        if (!validates.includes(input) && !validates.includes('*')) {
            continue
        }

        const value = formData[input]
        switch (typeof value) {
            case 'string':
                if (value.trim().length === 0) {
                    formErrors = {
                        ...formErrors,
                        [input]: 'This field is required',
                    }
                    return { success: false, errors: formErrors }
                }
                break

            case 'number':
                if (value <= 0) {
                    formErrors = {
                        ...formErrors,
                        [input]: 'This field is required',
                    }
                    return { success: false, errors: formErrors }
                }
                break

            default:
                if (!value) {
                    formErrors = {
                        ...formErrors,
                        [input]: 'This field is required',
                    }
                    return { success: false, errors: formErrors }
                }
                break
        }


        formErrors = {
            ...formErrors,
            [input]: '',
        }
    }
    
    return { success: true, errors: formErrors }
}

export default validateInputs
