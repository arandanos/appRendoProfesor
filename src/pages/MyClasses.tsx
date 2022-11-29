import { IonContent, IonPage, IonGrid, IonIcon, IonInput, IonItem, IonList } from '@ionic/react';
import Header from '../components/Header';
import { sendGetAllRequest } from '../ApiMethods';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import ListItem from '../components/ListItem';
import PopUp from '../components/PopUp';
import './Pages.css'
import { briefcaseOutline } from 'ionicons/icons';

const MyClasses: React.FC = () => {

  const [ classes, setClasses ] = useState<any>([]);

  useEffect(() =>{
    sendGetAllRequest("classroom").then(data => {
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
        <IonGrid class='list-container'>
          {classes.map((classroom : any) => {
                return (
                    <ListItem text={classroom['_name']['_text']} pictogram={classroom['_name']['_pictogram']}/>
                );
            })}
        </IonGrid>
        <PopUp label='Añadir Clase' title='Nueva Clase' popUpContent={content}></PopUp>
      </IonContent>
    </IonPage>
  );
};

export default MyClasses;
