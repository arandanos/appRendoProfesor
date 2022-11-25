import { IonContent, IonGrid, IonNav, IonPage, IonSearchbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './KitchenOrderView.css'


import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../variables';
import ListItem from '../components/ListItem';
import { useParams } from 'react-router';
const baseURL = "http://localhost:8000/api/task/2";

const MaterialInventoryDisponibility: React.FC = () => {
    

    type params = {
        id_material: string;
    }
    const {id_material} = useParams<params>();
    
    //const id_material  = useParams();
    return (
            <IonNav root={() =>
                <IonPage>
                    <Header title= {"Almacén: " + id_material}  back settings={false}  />
                    <IonContent fullscreen>
                    <IonGrid class='list-container'>
                        <IonSearchbar showClearButton="focus" placeholder="Buscar material..."></IonSearchbar>

                    {/*  {materials.map((element : any) => {
                                return (
                                    <ListItem text={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']}/>
                                );
                            })}*/}
                        </IonGrid>
                    </IonContent>
                </IonPage>
            }></IonNav>
        );
    };

export default MaterialInventoryDisponibility;