import { IonContent, IonItem, IonPage, IonLabel, IonInput, IonIcon, IonTextarea, IonGrid, IonNav, IonNavLink, IonList, IonFabButton } from '@ionic/react';
// import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { cameraOutline, checkmarkOutline, clipboardOutline, createOutline, eyeOutline, gridOutline, personOutline } from 'ionicons/icons';
// import './MaterialTaskView.css'
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import { sendGetByIDRequest, sendPutRequest } from '../ApiMethods';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';

interface MaterialTaskViewProps extends RouteComponentProps<{
	id_task: string;
}> {}

const MaterialTaskView: React.FC<MaterialTaskViewProps> = ({match}) => {

    const [materialTask, setmaterialTask] = useState<any>([]);
    const [feedbackInput, setFeedbackInput] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
 
    useEffect(()=>{
        sendGetByIDRequest("task", match.params.id_task).then(data => {
            setmaterialTask(data);
            setIsLoading(false);
        })

    },[])

    function handleFeedbackChange(e:any){
        setFeedbackInput(e.target.value);
    }

    function handleFeedbackSend(e: any){
        sendPutRequest("accessible_element", materialTask['_feedback']['_name']['_id'] , {
            "_text": feedbackInput
        })
    };

   
    if(isLoading) {
        // * AQUI IRA EL SPLASH DE CARGA
        return(
          <IonPage>
            <h1>Cargando...</h1>
          </IonPage>
        );
    } 

    const placeholder = () => {
        if(materialTask['_feedback']){
            return materialTask['_feedback']['_name']['_text']
        } else 
            return 'Escribir feedback...'
    }


    return (
            <IonPage>
                <Header title='Material' back settings={false}/>
                <IonContent >
                    <IonList class='width-90'>
                        {/** REALMENTE NO ES NECESARIO MOSTRAR EL TIPO DE TAREA, YA QUE EL NOMBRE LO INDICA */}
                        {/* <StyledInput label='Tipo' disabled iconStart={gridOutline} iconEnd={createOutline} value = {materialTask['_type']}></StyledInput> */}

                        <StyledInput disabled label='Alumno Asignado' iconStart={personOutline} iconEnd={createOutline} value={materialTask['_student']['_name']['_text']}></StyledInput>

                        <CalendarPicker label='Fecha límite de realización' disabled editButton value={materialTask['_due_date']}/>
                        
                        <IonLabel>Dar feedback</IonLabel>
                        <IonItem shape='round' fill='outline'>
                            <IonTextarea placeholder={placeholder()} autoGrow={true} onIonChange={handleFeedbackChange}></IonTextarea>
                            <IonIcon slot='end' icon={cameraOutline} />
                        </IonItem>

                        <StyledButton label='Enviar Feedback' onClick={handleFeedbackSend}></StyledButton>
                    </IonList>  
      
                    <div className='wrap-material-order-buttons'>
                        {/* <div className='wrap-material-order-button'>
                            <IonFabButton>
                                <IonIcon icon={chatbubbleOutline} />
                            </IonFabButton>
                        </div> */}
                        {/* <div className='wrap-material-order-button'> */}
                            <StyledButton label='Tarea Correcta' icon={checkmarkOutline}></StyledButton>
                            {/* <IonFabButton>
                                <IonIcon icon={checkmarkOutline} />
                            </IonFabButton> */}
                        {/* </div> */}
                    </div>
                </IonContent>
            </IonPage>
    );

};





export default MaterialTaskView;






