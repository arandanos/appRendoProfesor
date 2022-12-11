import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import '../ApiMethods'
import React, { useEffect, useState } from 'react';
import { addCircleOutline, cafeOutline } from 'ionicons/icons';
import { sendGetAllRequest, sendPostRequest, sendDeleteIDRequest } from '../ApiMethods';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import PopUp from '../components/PopUp';


const Plastize: React.FC = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    
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
            <Header title="Plastificadora" back settings={false}/>

            <IonContent fullscreen></IonContent>
        </IonPage>
    );

};

export default Plastize;