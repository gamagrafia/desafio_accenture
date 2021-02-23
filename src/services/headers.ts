const Headers = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('@tokenApp')
    }
}
export default Headers;