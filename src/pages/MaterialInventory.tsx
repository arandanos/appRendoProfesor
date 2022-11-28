import { IonGrid, IonSearchbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './MaterialInventory.css'

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../variables';
import ListItem from '../components/ListItem';
import MaterialList from '../components/MaterialList';

const MaterialInventory: React.FC = () => {
    
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
    var dishTypes: Array<string> = [];  
    dishTypes = ["Menús", "Postres"];


    arrayElementos = [
        <>
            <IonGrid class="list-container-materials">
                {
                    materials.map(material => {
                        return (
                            <ListItem text={material['_type']['_item']['_text']} pictogram={material['_type']['_item']['_pictogram']} href={''}></ListItem>
                        )
                        })
                }
            </IonGrid>
        </>
    ]

    return (
        <>
            <Header title="Almacén" back settings={false}  />
          {/*  <IonSearchbar showClearButton="focus" placeholder="Buscar material...">
            </IonSearchbar> */}
            <MaterialList tabsComponents={arrayElementos}></MaterialList>
        </>
    );

};

export default MaterialInventory;