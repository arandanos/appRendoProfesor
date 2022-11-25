import { IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid } from '@ionic/react';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './Pages.css'
import StyledButton from '../components/StyledButton';
import { checkmarkCircleOutline } from 'ionicons/icons';
import axios from 'axios';
import { API_URL } from '../variables';
import { useEffect, useState } from 'react';

const KitchenOrderTask: React.FC = () => {
  // const [fecha, setFecha] = useState<any>("");


  var valor : any;
  // useEffect(() =>{  
    // setFecha(valor);
  // }, [valor])

  const sendPostRequest = (date: any, auto_feedback: any) => {

    return axios({
      url: API_URL + "task",
      method: 'post',
      data: {
        '_due_date': date,
        '_name': '7',
        '_type': "COMANDA",
        '_auto_feedback': auto_feedback
        
      }
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };

  const handleButtonClick = () => {
    sendPostRequest(sessionStorage.getItem("fecha"), sessionStorage.getItem("auto_feedback"));
  }

  return (
    <>
      <Header title="Comanda" back settings={false}/>
      <IonContent fullscreen>
        <IonList>
          <IonGrid class="width-90 grid-with-button">
            <CalendarPicker label='Seleccionar fecha límite' disabled={false} editButton={false} value=''/>

            <IonLabel>Seleccionar alumno</IonLabel>
            <IonItem shape="round" fill="outline">
              <IonSelect interface="popover" placeholder="Alumno">
                <IonSelectOption value="apples">Manuel García</IonSelectOption>
                <IonSelectOption value="oranges">Franciso Barrios</IonSelectOption>
                <IonSelectOption value="bananas">Antonio Suárez</IonSelectOption>
              </IonSelect>
            </IonItem>

            <ToggleSwitch label='Cálculo automático de número menús' checked={false} id="auto_calc_menu"/>

            <ToggleSwitch label='Feedback automático' checked={false} id="auto_feedback"/>

            <ToggleSwitch label='Comentarios' checked id="allow_comments"/>

          </IonGrid>
            <StyledButton label="Crear Comanda" icon={checkmarkCircleOutline} id="confirm-order" onClick={handleButtonClick}/>
        </IonList>
      </IonContent>
    </>
  );
};

export default KitchenOrderTask;