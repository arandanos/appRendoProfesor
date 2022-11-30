import { IonContent, IonPage, IonGrid, IonNav, IonSearchbar } from '@ionic/react';
import Header from '../components/Header';
import {sendGetAllRequest} from '../ApiMethods'
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';

const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    sendGetAllRequest("task").then(data => {
      setTasks(data)      
    })    
  }, []) 

  const content = ( 
    <></>
  )

  return (
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
  );
};

export default Tasks;

