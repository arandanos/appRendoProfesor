import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import '../ApiMethods'
import React, { useEffect, useState } from 'react';
import { saveOutline } from 'ionicons/icons';
import { sendGetAllRequest, sendPostRequest, sendDeleteIDRequest } from '../ApiMethods';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import PopUp from '../components/PopUp';
import ToggleSwitch from '../components/ToggleSwitch';

const AddTeacher: React.FC = () => {

    const clearSessions = () => {
        sessionStorage.removeItem("admin_permissions");
    }

    const content = ( 
        <IonList class='width-90' >
          <IonItem fill="outline" shape="round">
            <IonIcon slot="start" icon={saveOutline} />
            <IonInput type="text" placeholder='Nombre de la Clase' ></IonInput>
          </IonItem>
        </IonList>
      )

    return (
        <IonPage>
            <Header title="Añadir profesor" back settings={false}/>
            <IonContent fullscreen>
                <IonGrid class="width-90">
                    <IonLabel>Introduce el nombre del profesor</IonLabel>
                    <IonItem shape="round" fill="outline">
                        <IonSelect interface="popover" placeholder="Alumno">
                            <IonSelectOption>Manuel García</IonSelectOption>
                            <IonSelectOption>Franciso Barrios</IonSelectOption>
                            <IonSelectOption>Antonio Suárez</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonGrid>

                <IonGrid class="width-90">
                    <IonLabel class="padding-top">Introduce un nombre de un alumno</IonLabel>
                    <IonItem shape="round" fill="outline">
                        <IonSelect interface="popover" placeholder="Alumno">
                            <IonSelectOption>Manuel García</IonSelectOption>
                            <IonSelectOption>Franciso Barrios</IonSelectOption>
                            <IonSelectOption>Antonio Suárez</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonGrid>
                    

                <IonGrid class="width-90">
                    <IonLabel>Introduce contraseña</IonLabel>
                    <IonItem shape="round" fill="outline">Contraseña</IonItem>
                </IonGrid>

                <IonGrid class="width-90">
                    <IonLabel>Vuelve a introducir la contraseña</IonLabel>
                    <IonItem shape="round" fill="outline">Contraseña</IonItem>
                </IonGrid>
                    
                <IonGrid class="width-90">
                    <IonLabel>Introduce una imagen o pictograma</IonLabel>
                    <IonItem shape="round" fill="outline">Nuevo pictograma</IonItem>
                </IonGrid>

                <ToggleSwitch label='Permisos de administrador' checked id="admin_permissions"/>

                <PopUp label='Guardar' title='Guardar<ion-icon name="save-outline"></ion-icon>' popUpContent={content}></PopUp>

            </IonContent>
        </IonPage>
    )
};

export default AddTeacher;