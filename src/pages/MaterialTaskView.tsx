import { IonContent, IonItem, IonPage, IonLabel, IonInput, IonIcon, IonButton, IonTextarea, IonRow, IonCol, IonGrid, IonNav, IonNavLink } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { cameraOutline, chatbubbleOutline, checkmarkCircleOutline, clipboardOutline, createOutline, eyeOutline, personOutline } from 'ionicons/icons';
import './MaterialTaskView.css'
import React from 'react';
import axios from "axios";
import KitchenOrderView from './KitchenOrderView';
const baseURL = "http://localhost:8000/api/task/2";


const MaterialTaskView: React.FC = () => {
    var estado = "No completada"

    return (
        <IonNav root={() =>
            <IonPage>
                <Header title='Material' back settings={false}/>
                <IonContent >
                    <IonGrid class='width-90'>
                        {/* <div className='width-90'> */}
                            <IonLabel>Alumno asignado</IonLabel>
                            <IonItem shape='round' fill='outline'>
                                <IonIcon slot='start' icon={personOutline} />
                                <IonInput value="Nombre alumno" disabled />
                                <IonIcon slot='end' icon={createOutline} />
                            </IonItem>
                        {/* </div> */}
                        {/* <div className='width-90'> */}
                            <CalendarPicker label='Fecha límite de realización' disabled editButton value={"08/12/2030"}/>
                        {/* </div> */}
                        {/* <div className='width-90'> */}
                            <IonLabel>Estado</IonLabel>
                            <IonItem shape='round' fill='outline'>
                                <IonIcon slot='start' icon={clipboardOutline} />
                                <IonInput value={estado} disabled />
                            </IonItem>
                        {/* </div> */}
                        {/* <div className='width-90'> */}
                            <IonLabel>Dar feedback</IonLabel>
                            <IonItem shape='round' fill='outline'>
                                <IonTextarea placeholder='Escribir feedback...'></IonTextarea>
                                <IonIcon slot='end' icon={cameraOutline} />
                            </IonItem>
                        {/* </div> */}
                        <div className="box">
                            <div className='b1'>
                                <IonButton shape='round' size='small' >
                                    <IonIcon icon={chatbubbleOutline} slot='icon-only' />
                                </IonButton>
                            </div>
                            <div className='b2'>
                                <IonButton shape='round' size='default' >
                                    <IonIcon icon={eyeOutline} slot='icon-only' />
                                    Materiales
                                </IonButton>
                            </div>
                            <div className='b3'>
                            <IonButton shape='round' size='small' >
                                <IonIcon icon={checkmarkCircleOutline} slot='icon-only' />
                            </IonButton>
                            </div>
                        </div> 

                    </IonGrid>  
    
                </IonContent>
            </IonPage>
        }></IonNav>
    );

};

export default MaterialTaskView;
















