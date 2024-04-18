import axios from "axios";

 const baseURL='https://g183k2nx-7029.brs.devtunnels.ms'

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }

})

export const consultaAcaoPorCodigo = (codigoAcao: string)  => {
    return apiClient.get<any>(`${baseURL}/Share/${codigoAcao}`);
 }
