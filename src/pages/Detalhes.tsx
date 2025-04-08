import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"


type detalhesParams = {
    id: string
}

// eslint-disable-next-line react-refresh/only-export-components
function Detalhes() {

    const {id} = useParams<detalhesParams>()
    
    return(
        <>
            <Header/>
            Detalhes
            <p>Olá ${id}</p>
            
            <Link
                to="../"
            >Retonar a pagina inicial</Link>
        </>
    )
}

export default Detalhes