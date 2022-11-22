import { IonContent, IonPage, IonGrid, IonButton, IonIcon, IonFabButton, IonLabel, IonPopover, IonTextarea, IonButtons, IonHeader, IonInput, IonItem, IonModal, IonTitle, IonToolbar, IonCard, IonAvatar, IonImg, IonList, IonFab } from '@ionic/react';
import Header from '../components/Header';
import { API_URL } from '../variables';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import MyClassesList from '../components/MyClassesList';
import PopUp from '../components/PopUp';
import './Pages.css'
import { briefcaseOutline, checkmark } from 'ionicons/icons';


const MyClasses: React.FC = () => {

  const [ classes, setClasses ] = useState<any>([]);


  const sendGetRequest = () => {

    return axios({
      url: API_URL + "classroom",
      method: 'get'
    }).then(response => {

      //console.log(response.data);
      return response.data;
    })
  };

  //sendGetRequest();

  useEffect(() =>{
    sendGetRequest().then(data => {
      setClasses(data)
    })

  }, [])

  const content = ( 
    <IonList class='width-90' >
      <IonItem fill="outline" shape="round">
        <IonIcon slot="start" icon={briefcaseOutline} />
        <IonInput type="text" placeholder='Nombre de la Clase' ></IonInput>
      </IonItem>

    </IonList>
  )
  
  return (
    <IonPage>
      <Header title="Mis clases" settings back={false}/>
      <IonContent fullscreen>
      <IonGrid>
        {classes.map((element: { [x: string]: { [x: string]: string; }; }) => {
              return (
                  <MyClassesList text={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']}/>
              );
          })}

          <PopUp label='Añadir Clase' title='Añadir Nueva Clase' popUpContent={content}></PopUp>
       
      </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default MyClasses;
