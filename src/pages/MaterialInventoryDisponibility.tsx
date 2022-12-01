import { IonContent, IonGrid, IonLabel, IonNav, IonPage, IonSearchbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './KitchenOrderView.css'
import '../ApiMethods'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DisponibilityList from '../components/DisponibilityList';
import { sendGetAllRequest } from '../ApiMethods';

const MaterialInventoryDisponibility: React.FC = () => {
    

    type params = {
        id_material: string;
    }
    const {id_material} = useParams<params>();

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
        let materialesFiltrados = materials.filter(  material => material['_type']['_id'] == id_material )
        return materialesFiltrados
    }

    /*PODRIA PONERSE MEJOR PERO NO ENCUENTRO LA FORMA*/
    var nombreMaterial = ""
    function findName(materials: any[]){
        materials.forEach(material => nombreMaterial = material['_type']['_item']['_text'])
    }

    var materialesF = findMaterials(materials) 
    findName(materialesF)

    arrayElementos = [
        <>
            <IonGrid class="list-container-materials">
                {
                    materialesF.map(material => {
                        return (
                            <DisponibilityList text={material['_color']['_text']} pictogram={material['_color']['_pictogram']} quantity={material['_quantity']}></DisponibilityList>
                        )
                        })
                }
            </IonGrid>
        </>
    ]


    
    return (
            <IonNav root={() =>
                <IonPage>
                    <Header title= {"Almacén: " + nombreMaterial}  back settings={false}  />
                    <IonContent fullscreen>
                        <IonLabel>{arrayElementos}</IonLabel>
                    </IonContent>
                </IonPage>
            }></IonNav>
        );
    };

export default MaterialInventoryDisponibility;