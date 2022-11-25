import { IonContent, IonGrid, IonNav, IonPage, IonSearchbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './KitchenOrderView.css'

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../variables';
import ListItem from '../components/ListItem';
const baseURL = "http://localhost:8000/api/task/2";

const MaterialInventory: React.FC = () => {
    
   /* const [materials, setMaterials] = useState([]);
    
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
        })
    },[])
    
*/
    var nombreMat = "Cartulina"

	return (
        <IonNav root={() =>
            <IonPage>
                <Header title="Almacén" back settings={false}  />
                <IonContent fullscreen>
                <IonGrid class='list-container'>
                    
                    
                    <IonSearchbar showClearButton="focus" placeholder="Buscar material..."></IonSearchbar>
                {/*  {materials.map((element : any) => {
                        nombreMat = {element['_accessible_element']['_text']}
                        var = {"/MaterialInventoryDisponibility/" + nombreMat }
                            return (
                               <ListItem text={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']} href=var/>
                            );
                        })}
                       
                        */}
                        <ListItem text="Nombre del material" pictogram='' href={'MaterialInventoryDisponibility/' + nombreMat }/>
                    </IonGrid>
                </IonContent>
            </IonPage>
        }></IonNav>
	);
};

export default MaterialInventory;