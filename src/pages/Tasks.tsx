import { IonContent, IonPage, IonGrid, IonItem, IonNav, IonLabel, IonIcon, IonRow, IonSearchbar, IonTabBar, IonTabButton, IonInput, IonList } from '@ionic/react';
import Header from '../components/Header';

import { API_URL } from '../variables';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';
import { briefcaseOutline } from 'ionicons/icons';

const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState([]);
 

  const sendGetRequest = () => {

    return axios({
      url: API_URL + "task",
      method: 'get'
    }).then(response => {       
      console.log(response.data)
      return response.data;
    })
  };


  useEffect(() =>{
    sendGetRequest().then(data => {
      setTasks(data)      
    })    
  }, []) 

  const content = ( 
    <></>
  )

  return (
    <IonNav root={() =>
      <IonPage>
        <Header title="Tareas" settings back={false}/>
        <IonContent fullscreen>
          <IonGrid class="list-container">

            <IonSearchbar showClearButton="focus" placeholder="Buscar tarea..."></IonSearchbar>
              {tasks.map(task => {
                    return (
                        <ListItem text={task['_name']['_text']} pictogram={task['_name']['_pictogram']}/>
                    );
                })}
            
            </IonGrid>
            <PopUp label='Añadir Tarea' title='Nueva Tarea' popUpContent={content}></PopUp>
        </IonContent>
      </IonPage>

    }></IonNav>
      
  );
};

export default Tasks;

