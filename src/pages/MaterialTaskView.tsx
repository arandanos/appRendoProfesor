import { IonContent, IonItem, IonPage, IonLabel, IonInput, IonIcon, IonButton, IonTextarea, IonRow, IonCol, IonGrid, IonNav, IonNavLink, IonList, IonFabButton } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { cameraOutline, chatbubbleOutline, checkmarkCircleOutline, checkmarkOutline, clipboardOutline, createOutline, eyeOutline, gridOutline, personOutline } from 'ionicons/icons';
import './MaterialTaskView.css'
import React from 'react';
import axios from "axios";
import KitchenOrderView from './KitchenOrderView';
const baseURL = "http://localhost:8000/api/task/2";


const MaterialTaskView: React.FC = () => {

    return (
            <IonPage>
                <Header title='Material' back settings={false}/>
                <IonContent >
                    <IonList class='width-90-height-70'>
                        <IonLabel>Tipo</IonLabel>
                        <IonItem shape='round' fill='outline'>
                            <IonIcon slot='start' icon={gridOutline} />
                            <IonInput value="Tipo tarea" disabled />
                            <IonIcon slot='end' icon={createOutline} />
                        </IonItem>

                        <IonLabel>Alumno asignado</IonLabel>
                        <IonItem shape='round' fill='outline'>
                            <IonIcon slot='start' icon={personOutline} />
                            <IonInput value="Nombre alumno" disabled />
                            <IonIcon slot='end' icon={createOutline} />
                        </IonItem>

                        <CalendarPicker label='Fecha límite de realización' disabled editButton value="2030-12-08"/>
                        <IonLabel>Dar feedback</IonLabel>
                        <IonItem shape='round' fill='outline'>
                            <IonTextarea placeholder='Escribir feedback...'></IonTextarea>
                            <IonIcon slot='end' icon={cameraOutline} />
                        </IonItem>
                        <IonButton class='sendFeedback-button' fill="outline" shape="round">Enviar feedback</IonButton>

                        </IonList>  
      
                        <div className='wrap-material-order-buttons'>
                            <div className='wrap-material-order-button'>
                                <IonFabButton>
                                    <IonIcon icon={chatbubbleOutline} />
                                </IonFabButton>
                            </div>
                            <div className='wrap-material-order-button'>
                                <IonFabButton>
                                    <IonIcon icon={checkmarkOutline} />
                                </IonFabButton>
                            </div>
                        </div>
                </IonContent>
            </IonPage>
    );

};





export default MaterialTaskView;






