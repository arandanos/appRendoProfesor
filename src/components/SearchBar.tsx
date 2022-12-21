import { IonSearchbar } from "@ionic/react"

interface SearchBarProps {
    //* Array de elementos obtenidos de la Base de Datos que se quiere filtrar
    elements : any[]; 

    //* Funcion para modificar el valor de la variable resultados del componente padre
    updateResults : any; 
}

const SearchBar: React.FC<SearchBarProps> = ( props : SearchBarProps) => {

    const resultsFilter = (element: any[], query : string) => {
        var results : any = [];
        element.map( element => {
            // ! Importante: solo funciona para los elementos de la base de datos cuya clave 
            // ! externa de accessible element se llame name, si en algun momento se necesita
            // ! para otro caso comunicarlo a quien esté haciendo la API para buscar una solución
            if (element['_name']['_text'].toLowerCase().includes(query.toLowerCase())){
                results.push(element);
            }
        })
        return results;
    }


    const handleSearchChange = (e: Event) => {
        let query = "";
        const target = e.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
        props.updateResults(resultsFilter(props.elements, query))
    }
    return (
        <IonSearchbar showClearButton="focus" placeholder="Buscar tarea..." onIonChange={(e)=>handleSearchChange(e)}></IonSearchbar> 
    );
}

export default SearchBar;