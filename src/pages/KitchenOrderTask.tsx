import { IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid } from '@ionic/react';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './Pages.css'
import StyledButton from '../components/StyledButton';
import { checkmarkCircleOutline, shield } from 'ionicons/icons';
import axios from 'axios';
import { API_URL } from '../variables';
import { useEffect, useState } from 'react';

const KitchenOrderTask: React.FC = () => {
  // const [fecha, setFecha] = useState<any>("");


  var valor : any;
  // useEffect(() =>{  
    // setFecha(valor);
  // }, [valor])

  const sendPostRequestTask = (date: any, auto_feedback: any) => {

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

  const sendPostRequestKitchenOrder = (id: any, auto_calc: any) => {

    return axios({
      url: API_URL + "kitchen_order",
      method: 'post',
      data: {
        "_task" : id,
        "_auto_calc": auto_calc
      }
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };

  const sendPostRequestKitchenOrderDetail = (classroom: any, dish: any, kitchen_order: any) => {

    return axios({
      url: API_URL + "kitchen_order_detail",
      method: 'post',
      data: {
        "_quantity" : "0",
        "_classroom" : classroom,
        "_dish" : dish,
        "_kitchen_order" : kitchen_order
      }
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };

  const sendGetRequestClassroom = () => {

    return axios({
      url: API_URL + "classroom",
      method: 'get',
     
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };
  const sendGetRequestDishes= () => {

    return axios({
      url: API_URL + "dish",
      method: 'get',
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };

  var classrooms: [];
  var dishes: [];

  const clearSessions = () => {
    sessionStorage.removeItem("fecha");
    sessionStorage.removeItem("auto_feedback");
    sessionStorage.removeItem("auto_calc_menu");
    sessionStorage.removeItem("allow_comments");
  }
  
  const handleButtonClick = () => {
    sendGetRequestClassroom().then(data => {
      classrooms = data;
    });
    sendGetRequestDishes().then(data => {
      dishes = data;
    });
    sendPostRequestTask(sessionStorage.getItem("fecha"), sessionStorage.getItem("auto_feedback"))
      .then(response => {
        
        sendPostRequestKitchenOrder(response['_id'], sessionStorage.getItem("auto_calc_menu")).then(response =>{
          clearSessions();
          classrooms.map( classroom => {
            dishes.map( dish => {
              sendPostRequestKitchenOrderDetail(classroom['_id'], dish['_id'], response['_id'])
            })
          })
        })
      }
    )
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