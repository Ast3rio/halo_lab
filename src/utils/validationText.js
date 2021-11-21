export const validationText = (error) => {
    switch (error) {
        case 'empty':
            return 'This field in required'
        case 'numbers':
            return 'Only numbers allowed'
        case 'length':
            return 'Should contain 12 characters'
        case 'letters':
            return 'Only letters allowed'
        default:
            return ''
    }
}
