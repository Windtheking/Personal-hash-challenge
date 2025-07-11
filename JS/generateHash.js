export function generateSHA256Hash(password) {
    return CryptoJS.SHA256(password).toString();
}