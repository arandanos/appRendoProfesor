import { IonContent, IonItem, IonPage, IonLabel, IonInput, IonIcon, IonButton, IonTextarea, IonRow, IonCol, IonGrid, IonNav, IonNavLink, IonList, IonFabButton } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { cameraOutline, chatbubbleOutline, checkmarkCircleOutline, checkmarkOutline, clipboardOutline, createOutline, eyeOutline, gridOutline, personOutline } from 'ionicons/icons';
import './MaterialTaskView.css'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import KitchenOrderView from './KitchenOrderView';
import { useParams } from 'react-router';
import { sendGetAllRequest, sendPutRequest } from '../ApiMethods';
const baseURL = "http://localhost:8000/api/task/2";


const MaterialTaskView: React.FC = () => {

    type params = {
        id_material_task: string;
    }
    const {id_material_task} = useParams<params>();

    const [materialTask, setmaterialTask] = useState([]);
    const [feedbackInput, setFeedbackInput] = useState("")
 
    useEffect(()=>{
        sendGetAllRequest("task").then(data => {
            setmaterialTask(data)
        })

    },[])
     
    function findTask(materialTasks: any[]) {
        let tarea = materialTasks.filter(materialTask => materialTask['_id'] == id_material_task )
        console.log(tarea)
        return tarea 
    }

    var tipo = ""
    var fechaLimite
    var feedbackEntero
    var numeroFeedback = 0
    var numeroAccessibleElement=0
    
    var tarea = findTask(materialTask)
    tarea.map(task => {
            tipo = task['_type']
            fechaLimite = task['_due_date']
            feedbackEntero = task['_feedback']
            numeroFeedback = feedbackEntero['_feedback']['_id']
    })


    var feedbackSaved = ""
    function saveFeedback(e:any){
        feedbackSaved = e.target.value
    }

    function getFeedback(e: any){
        sendPutRequest("accessible_element/" + numeroFeedback , {
            "_text": feedbackSaved
        }
        )
    };


    return (
            <IonPage>
                <Header title='Material' back settings={false}/>
                <IonContent >
                    <IonList class='width-90-height-70'>
                        <IonLabel>Tipo</IonLabel>
                        <IonItem shape='round' fill='outline'>
                            <IonIcon slot='start' icon={gridOutline} />
                            <IonInput disabled value = {tipo} />
                            
                            <IonIcon slot='end' icon={createOutline} />
                        </IonItem>

                        <IonLabel>Alumno asignado</IonLabel>
                        <IonItem shape='round' fill='outline'>
                            <IonIcon slot='start' icon={personOutline} />
                            <IonInput value="Nombre alumno" disabled />
                            <IonIcon slot='end' icon={createOutline} />
                        </IonItem>

                        <CalendarPicker label='Fecha límite de realización' disabled editButton value={fechaLimite}/>
                        
                        <IonLabel>Dar feedback</IonLabel>
                        <IonItem shape='round' fill='outline'>
                            <IonTextarea placeholder='Escribir feedback...' autoGrow={true} onIonChange={saveFeedback}></IonTextarea>
                            {/* debounce={1000} onIonChange={getFeedback}*/}
                            <IonIcon slot='end' icon={cameraOutline} />
                        </IonItem>
                        <IonButton class='sendFeedback-button' fill="outline" shape="round" onClick={getFeedback}>Enviar feedback</IonButton>

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






