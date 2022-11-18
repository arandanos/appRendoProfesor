import { IonContent, IonPage, IonGrid, IonButton, IonIcon } from '@ionic/react';
import Header from '../components/Header';
import { API_URL } from '../variables';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MyClassesList from '../components/MyClassesList';
import { addCircleOutline } from 'ionicons/icons';
import { checkmarkOutline } from 'ionicons/icons';
import AddButton from '../components/AddButton';


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
        </IonGrid>

        <AddButton text='Añadir nueva clase'/>

      </IonContent>
    </IonPage>
  );
};

export default MyClasses;
