import { IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonPage } from '@ionic/react';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './Pages.css'
import StyledButton from '../components/StyledButton';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { sendPostRequest, sendGetAllRequest } from '../ApiMethods';
import { useEffect, useState } from 'react';

const KitchenOrderTask: React.FC = () => {
  // const [fecha, setFecha] = useState<any>("");


  var valor : any;
  // useEffect(() =>{  
    // setFecha(valor);
  // }, [valor])

  var classrooms: [];
  var dishes: [];

  const clearSessions = () => {
    sessionStorage.removeItem("fecha");
    sessionStorage.removeItem("auto_feedback");
    sessionStorage.removeItem("auto_calc_menu");
    sessionStorage.removeItem("allow_comments");
  }
  
  const handleButtonClick = () => {

    // * Obtener todas las clases
    sendGetAllRequest("classroom").then(data => {
      classrooms = data;
    });
    // * Obtener todos los platos
    sendGetAllRequest("dish").then(data => {
      dishes = data;
    });

    // * Crear una Tarea de Tipo Comanda
    sendPostRequest( "task",  {
      '_due_date': sessionStorage.getItem("fecha"),
      '_name': '7',
      '_type': "COMANDA",
      '_auto_feedback': sessionStorage.getItem("auto_feedback")
    }).then(response => {
        // * Utilizar el id de la tarea creada para añadir una Kitchen Order
        sendPostRequest( "kitchen_order", {
          "_task" : response['_id'],
          "_auto_calc": sessionStorage.getItem("auto_calc_menu")
        }).then(response =>{
          // * Utilizar el id de la Kitchen order para crear todos los kichen order detail: uno por cada clase y plato 
          clearSessions();
          classrooms.map( classroom => {
            dishes.map( dish => {
              sendPostRequest( "kitchen_order_detail", {
                "_quantity" : "0",
                "_classroom" : classroom['_id'],
                "_dish" : dish['_id'],
                "_kitchen_order" : response['_id']
              })
            })
          })
        })
      }
    )
  }

  return (
    <IonPage>
      <Header title="Comanda" back settings={false}/>
      <IonContent fullscreen>

          <IonGrid class="width-90 grid-with-button">
            <CalendarPicker label='Seleccionar fecha límite' disabled={false} editButton={false} value=''/>

            <IonLabel>Seleccionar alumno</IonLabel>
            <IonItem shape="round" fill="outline">
              <IonSelect interface="popover" placeholder="Alumno">
                <IonSelectOption>Manuel García</IonSelectOption>
                <IonSelectOption>Franciso Barrios</IonSelectOption>
                <IonSelectOption>Antonio Suárez</IonSelectOption>
              </IonSelect>
            </IonItem>

            <ToggleSwitch label='Cálculo automático de número menús' checked={false} id="auto_calc_menu"/>

            <ToggleSwitch label='Feedback automático' checked={false} id="auto_feedback"/>

            <ToggleSwitch label='Comentarios' checked id="allow_comments"/>

          </IonGrid>
            <StyledButton label="Crear Comanda" icon={checkmarkCircleOutline} id="confirm-order" onClick={handleButtonClick}/>

      </IonContent>
    </IonPage>
  );
};

export default KitchenOrderTask;