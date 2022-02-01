
const urlCrud = 'http://localhost:3000';

const getListAdministrador = async () => {
    const response = await fetch(`${urlCrud}/administrador`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createAdministrador = async (administrador) => {

    const resp = await fetch(`${urlCrud}/administrador`, {
        method: 'POST',
        body: JSON.stringify(administrador),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListAdministrador,
    createAdministrador
    
}
