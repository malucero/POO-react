import "./Usuario.css"

function Usuario (props){
    return(
        <div className="container">
        <h2 className="IdTabla">{props.id}</h2>
        <p className="encabezado">{props.nombre}</p>
        <p className="contrasena">{props.contrasena}</p>
        <p className="email">{props.email}</p>
        </div>
    )
}

export default Usuario;