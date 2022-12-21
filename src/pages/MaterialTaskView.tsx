import { IonContent, IonItem, IonPage, IonLabel, IonInput, IonIcon, IonTextarea, IonGrid, IonNav, IonNavLink, IonList, IonFabButton } from '@ionic/react';
// import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { briefcaseOutline, cameraOutline, checkmarkOutline, clipboardOutline, createOutline, eyeOutline, gridOutline, personOutline } from 'ionicons/icons';
// import './MaterialTaskView.css'
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import { sendGetByIDRequest, sendPutRequest } from '../ApiMethods';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import ListItem from '../components/ListItem';

interface MaterialTaskViewProps extends RouteComponentProps<{
    id_task: string;
}> { }

const MaterialTaskView: React.FC<MaterialTaskViewProps> = ({ match }) => {

    const [classroom, setClassroom] = useState<any>([]);
    const [details, setDetails] = useState<any>([]);
    const [materialTask, setmaterialTask] = useState<any>([]);
    const [feedbackInput, setFeedbackInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        sendGetByIDRequest("task", match.params.id_task).then(task => {
            setmaterialTask(task);
            sendGetByIDRequest("material_task/task", task['_id']).then(material_task => {
                setClassroom(material_task['_classroom']);
                sendGetByIDRequest('material_task_detail/task', material_task['_id']).then((details) => {
                    setDetails(details);
                    setIsLoading(false);
                })
            })
        })

    }, [])

    function handleFeedbackChange(e: any) {
        setFeedbackInput(e.target.value);
    }

    function handleFeedbackSend(e: any) {
        sendPutRequest("accessible_element", materialTask['_feedback']['_name']['_id'], {
            "_text": feedbackInput
        })
    };


    if (isLoading) {
        // * AQUI IRA EL SPLASH DE CARGA
        return (
            <IonPage>
                <h1>Cargando...</h1>
            </IonPage>
        );
    }

    const placeholder = () => {
        if (materialTask['_feedback']) {
            return materialTask['_feedback']['_name']['_text']
        } else
            return 'Escribir feedback...'
    }

    var estado = "No completada"

    if (materialTask!['_status'])
        estado = "Completada"


    return (
        <IonPage>
            <Header title='Material' back settings={false} />
            <IonContent >
                <IonGrid class='grid-with-button width-90 scroll'>
                    {/** REALMENTE NO ES NECESARIO MOSTRAR EL TIPO DE TAREA, YA QUE EL NOMBRE LO INDICA */}
                    {/* <StyledInput label='Tipo' disabled iconStart={gridOutline} iconEnd={createOutline} value = {materialTask['_type']}></StyledInput> */}
                    <CalendarPicker label='Fecha límite de realización' disabled editButton value={materialTask['_due_date']} />

                    <StyledInput disabled label='Clase' iconStart={briefcaseOutline} iconEnd={createOutline} value={classroom['_name']['_text']}></StyledInput>
                    <StyledInput disabled label='Alumno Asignado' iconStart={personOutline} iconEnd={createOutline} value={materialTask['_student']['_name']['_text']}></StyledInput>
                    <StyledInput label='Estado' iconStart={clipboardOutline} disabled value={estado}></StyledInput>

                    <IonLabel>Materiales Pedidos: </IonLabel>

                    <IonList>
                        {details.map((detail: any) => {
                            return (
                                <ListItem id={detail['_id']} quantity={detail['_quantity']} text={detail['_material']['_type']['_name']['_text'] + " " + detail['_material']['_color']['_name']['_text']}></ListItem>
                            )
                        })}
                    </IonList>

                    <IonLabel>Dar feedback</IonLabel>
                    <IonItem shape='round' fill='outline'>
                        <IonTextarea placeholder={placeholder()} autoGrow={true} onIonChange={handleFeedbackChange}></IonTextarea>
                        <IonIcon slot='end' icon={cameraOutline} />
                    </IonItem>

                    <StyledButton label='Enviar Feedback' onClick={handleFeedbackSend}></StyledButton>
                </IonGrid>

                <StyledButton label='Tarea Correcta' icon={checkmarkOutline}></StyledButton>

            </IonContent>
        </IonPage>
    );

};





export default MaterialTaskView;






