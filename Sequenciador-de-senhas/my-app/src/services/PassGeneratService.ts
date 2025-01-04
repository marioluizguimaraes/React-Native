export default function generatPass(){
    let password: string = ''
    let passLength: number = 12
    const characters: string = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%&'
    
    for (let i = 0; i < passLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password
}