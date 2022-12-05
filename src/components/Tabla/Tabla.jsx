import { CSVLink } from "react-csv";

import { ContentTabla } from './Tabla.styles.js';

function Tabla({data, handleSelectUserInfo, exportList}) {
    return (
        <ContentTabla>
            <CSVLink data={exportList} filename={"lista-registro.csv"} className="btn btn-download" >Descargar csv</CSVLink>
            

            <table className="table"> 
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Télefono</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !data.length ? (
                            <tr><td colSpan={5}>No hay resultados</td></tr>
                        )
                        : data.map( (user, i) => (
                            <tr key={user.id}>
                                <td>{i + 1}</td>
                                <td>{user.name + ' ' + user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td> <button className='btn primary' onClick={() => handleSelectUserInfo(user.id)} >Ver Respuestas</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </ContentTabla>
    )
}

export default Tabla