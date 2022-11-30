import { IonContent, IonGrid, IonLabel, IonSearchbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './MaterialInventory.css'
import '../ApiMethods'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ListItem from '../components/ListItem';
import { sendGetAllRequest } from '../ApiMethods';
const API_URL = ("http://localhost:8000/api/");


const MaterialInventory: React.FC = () => {
    
    /*para los datos de materiales*/
    const [materials, setMaterials] = useState([]);
    
    /*Queremos que obtenga los materiales de la base de datos) */
    

    useEffect(()=>{
        sendGetAllRequest("material").then(data => {
            setMaterials(data)
        })
    },[])
    
    var arrayElementos: Array<JSX.Element> = [];

    function findMaterials(materials: any[]) {
        var tipos: any[] = []
        var materialesFiltrados : any[] = []
        materials.map( material =>{
            var tipo = material['_type']['_id']
            if (tipos.find(element => element == tipo) == undefined){
                tipos.push(tipo)
                materialesFiltrados.push(material)
            }
        }   
        )
        return materialesFiltrados
    }
    var materialesF = findMaterials(materials) 


    arrayElementos = [
        <>
            <IonGrid class="list-container-materials">
                {
                    materialesF.map(material => {
                        return (
                            <ListItem text={material['_type']['_item']['_text']} pictogram={material['_type']['_item']['_pictogram']} href={"/MaterialInventoryDisponibility/"+ material['_type']['_id']}></ListItem>
                        )
                        })
                }
            </IonGrid>
        </>
    ]

    return (
        <>
            <Header title="Almacén" back settings={false}  />
            <IonSearchbar showClearButton="focus" placeholder="Buscar material...">
            </IonSearchbar> 

            <IonContent fullscreen>
                 <IonLabel>{arrayElementos}</IonLabel>
             </IonContent>
        </>
    );

};

export default MaterialInventory;