import { IonContent, IonGrid, IonPage, IonSearchbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './MaterialInventory.css'
import '../ApiMethods'
import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import { sendGetAllRequest } from '../ApiMethods';
import SearchBar from '../components/SearchBar';


const Storage: React.FC = () => {
    
    /*para los datos de materiales*/
    const [materials, setMaterials] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ results, setResults ] = useState<any>([]);
  
    
    useEffect(()=>{
        sendGetAllRequest("material_type").then(data => {
            setMaterials(data);
            setResults(data); 
            setIsLoading(false);  
        })
    },[])

    const updateResults = (results:any)=>{
        setResults(results);
    }

    if(isLoading) {
        // * AQUI IRA EL SPLASH DE CARGA
        return(
          <IonPage>
            <h1>Cargando...</h1>
          </IonPage>
        );
    } 

    return (
        <IonPage>
            <Header title="Almacén" back settings={false}  />

            <IonContent fullscreen>
                {/* <IonSearchbar showClearButton="focus" placeholder="Buscar material..." debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar> */}
                <SearchBar elements={materials} updateResults={updateResults}></SearchBar>
                <IonGrid class="list-container-materials">
                    {
                        results.map((material:any) => {
                            return (
                                <ListItem text={material['_name']['_text']} pictogram={material['_name']['_pictogram']} href={"/storage/"+ material['_id']}></ListItem>
                            )
                            })
                    }
                </IonGrid>

            </IonContent>
        </IonPage>
    );

};

export default Storage;