import { IonContent, IonGrid, IonLabel, IonNav, IonPage } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './KitchenOrderView.css'
import '../ApiMethods'


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { sendGetAllRequest, sendDeleteIDRequest, sendPutRequest, sendGetByIDRequest } from '../ApiMethods';
import ListItem from '../components/ListItem';

const StorageAvailability: React.FC = () => {
    

    type params = {
        id_material: string;
    }
    const {id_material} = useParams<params>();
    
    const [colors, setColors] = useState([]);
    const [material, setMaterial] = useState();
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(()=>{
        sendGetAllRequest("material/type/" + id_material).then(data => {
            setColors(data);
            sendGetByIDRequest("material_type", id_material).then(data => {
                setMaterial(data);
                setIsLoading(false);  
            })
        })
    },[])

    if(isLoading) {
        // * AQUI IRA EL SPLASH DE CARGA
        return(
          <IonPage>
            <h1>Cargando...</h1>
          </IonPage>
        );
    } 

    function handleDeleteClick(id: string){
        sendDeleteIDRequest("material", id);
        //Recarga la pagina
        window.location.reload();
    }

    function handleEditClick(id: string){
        //sendPutRequest("material", id);
        //Recarga la pagina
        window.location.reload();
    }

    var arrayElementos: Array<JSX.Element> = [
        <IonGrid class="list-container-materials">
            {colors.map(material => {
                return (
                    <ListItem quantity={material['_quantity']}
                        text={material['_color']['_name']['_text']}
                        pictogram={material['_color']['_name']['_pictogram']}
                        id={material['_id']}
                    ></ListItem>
                )
            })}
        </IonGrid>
    ]
   
    return (
        <IonPage>
            <Header title= {"Almacén: " + material!['_name']['_text']} back settings={false}  />
            <IonContent fullscreen>
                {arrayElementos}
            </IonContent>
        </IonPage>);
    };

export default StorageAvailability;