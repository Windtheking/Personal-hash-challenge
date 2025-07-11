export function validateFields(username, password) {
    if (!username || !password) {
        console.error('All spaces must be filled out');
        return false;
    }
    return true;
}
