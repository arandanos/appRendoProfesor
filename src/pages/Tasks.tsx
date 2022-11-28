import { IonContent, IonPage, IonGrid, IonItem, IonNav, IonLabel, IonIcon, IonRow, IonSearchbar, IonTabBar, IonTabButton } from '@ionic/react';
import './Tasks.css';
import Header from '../components/Header';

import { API_URL } from '../variables';
import { readerOutline, settingsOutline } from 'ionicons/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal} from 'react';
import TaskList from '../components/TasksList';
import ButtonForward from '../components/ButtonForward';
import MaterialTaskView from './MaterialTaskView';
import KitchenOrderView from './KitchenOrderView';

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
  
  console.log(tasks[1])

  return (
    <IonNav root={() =>
      <IonPage>
        <Header title="Tareas" settings back={false}/>
        <IonContent fullscreen>
        <IonGrid>

          <IonSearchbar showClearButton="focus" placeholder="Buscar tarea..."></IonSearchbar>

          {tasks.map(element => {
                return (
                    <TaskList text={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']}/>
                );
            })}
          

          </IonGrid>
        </IonContent>
      </IonPage>

    }></IonNav>
      
  );
};

export default Tasks;

