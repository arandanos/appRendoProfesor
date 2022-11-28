import { IonContent, IonGrid, IonNav, IonPage, IonSearchbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './KitchenOrderView.css'


import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../variables';
import ListItem from '../components/ListItem';
import { useParams } from 'react-router';
import DisponibilityList from '../components/DisponibilityList';
import MaterialList from '../components/MaterialList';
import { url } from 'inspector';
const baseURL = "http://localhost:8000/api/task/2";

const MaterialInventoryDisponibility: React.FC = () => {
    

    type params = {
        id_material: string;
    }
    const {id_material} = useParams<params>();


    /*para los datos de materiales*/
    const [materials, setMaterials] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    
    /*Queremos que obtenga los materiales de la base de datos) */
    const sendGetRequest =  () => {
        return axios({
            url: API_URL + "material",
            method: 'get'
        }).then(response => {
            return response.data;
        })
    };

    useEffect(()=>{
        sendGetRequest().then(data => {
            setMaterials(data)
            setIsLoading(false)
            setShowLoading(false)
        })
    },[])
    
    var arrayElementos: Array<JSX.Element> = [];
    const [isLoading, setIsLoading] = useState(true)
    var nombreMaterial = "aA"
    function findMaterials(materials: any[]) {
        let materialesFiltrados = materials.filter(  material => material['_type']['_id'] == id_material )
       /* var copia = materials.flat(0)
        nombreMaterial = copia['_type']['_item']['_text'] */
        return materialesFiltrados
    }

    var materialesF = findMaterials(materials) 

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
                    <IonGrid class='list-container'>
                        <MaterialList tabsComponents={arrayElementos}></MaterialList>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            }></IonNav>
        );
    };

export default MaterialInventoryDisponibility;