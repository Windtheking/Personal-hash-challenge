import { validateFields } from './JS/Validator.js';
import { generateSHA256Hash } from './JS/generateHash.js';


const STORED_HASH = '0208788aa2035cd5be6697efbd285df1afa881c8fd25e4bd5bbb247c29c58454';

document.getElementById('input4').addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('input1').value;
    const password = document.getElementById('input3').value;
    
    if (!validateFields(username, password)) return;
    
    console.log('Contraseña recibida:', JSON.stringify(password));
    const passwordHash = generateSHA256Hash(password);
    
    if (passwordHash === STORED_HASH) {
        console.log('Login exitoso');
        alert('Login exitoso');
    } else {
        console.log('Credenciales incorrectas');
        alert(`Credenciales incorrectas.`);
    }
});
