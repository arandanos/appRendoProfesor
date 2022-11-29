import { IonContent, IonPage, IonGrid, IonNav, IonSearchbar, IonInput, IonItem, InputChangeEventDetail, IonList, IonImg, IonPopover } from '@ionic/react';
import Header from '../components/Header';
import {sendGetAllRequest, sendGetARASAACRequest} from '../ApiMethods'
import { ChangeEventHandler, useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';
import axios from 'axios';
import { returnUpBack } from 'ionicons/icons';

const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() =>{
    sendGetAllRequest("task").then(data => {
      setTasks(data)      
    })    
  }, []) 

  const [data, setData] = useState([]);
  // let [results, setResults] = useState([...data]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    sendGetARASAACRequest(query).then( (resp) => {
      setData(resp);
    })
  }

  const content = ( 
    <>
     <IonSearchbar onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
      <IonList>
      { data.map(pic => (
        <ListItem text={pic['keywords'][0]['keyword']} pictogram={'https://api.arasaac.org/api/pictograms/' + pic["_id"] + '?resolution=500&download=false'}/>
        // <IonItem><IonImg class="pictogram-on-button" slot="start" src={'https://api.arasaac.org/api/pictograms/' + pic["_id"] + '?resolution=500&download=false'}></IonImg></IonItem>
      ))}
    </IonList>
    </>
  )


  const handleDoneClick = () => {
   
  }



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

            <PopUp label='Añadir Tarea' title='Nueva Tarea' popUpContent={content} doneAction={handleDoneClick}></PopUp>
        </IonContent>
      </IonPage>  
  );
};

export default Tasks;

