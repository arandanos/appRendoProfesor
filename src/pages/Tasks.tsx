import { IonContent, IonPage, IonGrid, IonNav, IonSearchbar, IonInput, IonItem, InputChangeEventDetail, IonList, IonImg, IonPopover } from '@ionic/react';
import Header from '../components/Header';
<<<<<<< HEAD
import {sendGetAllRequest, sendGetARASAACRequest} from '../ApiMethods'
import { ChangeEventHandler, useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';
import axios from 'axios';
import { returnUpBack } from 'ionicons/icons';
=======
import SearchBar from '../components/SearchBar';
import {sendGetAllRequest} from '../ApiMethods'
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';
import StyledButton from '../components/StyledButton';
import { addCircleOutline } from 'ionicons/icons';
>>>>>>> develop

const Tasks: React.FC = () => {

  const [ tasks, setTasks ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ results, setResults ] = useState<any>([]);

  useEffect(() =>{
    sendGetAllRequest("task").then(data => {
      setTasks(data);  
      setResults(data); 
      setIsLoading(false);  
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

  const popUpContent = ( 
    <>
     <IonSearchbar onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
      <IonList class="scroll">
      { data.map(pic => (
        <ListItem text={pic['keywords'][0]['keyword']} pictogram={'https://api.arasaac.org/api/pictograms/' + pic["_id"] + '?resolution=500&download=false'}/>
        // <IonItem><IonImg class="pictogram-on-button" slot="start" src={'https://api.arasaac.org/api/pictograms/' + pic["_id"] + '?resolution=500&download=false'}></IonImg></IonItem>
      ))}
    </IonList>
    </>
  )


  const handleDoneClick = () => {
   
  }

   //** Funcion para el buscador */
   const updateResults = (results:any)=>{
      setResults(results);
   }

  // * Funcion para generar el link a la tarea en funcion del tipo de tarea
   var generateHref = (task : any) => {
    let href= "#"

    if(task["_type"] == "COMANDA"){
      href = "/kitchen_order/" + task["_id"]
    }
    if(task["_type"] == "MATERIAL"){
      href = "/material_task_view/" + task["_id"]
    }
    return href
  }
  

  if(isLoading) {
    // * AQUI IRA EL SPLASH DE CARGA
    return(
      <IonPage>
        <h1>Cargando...</h1>
      </IonPage>
    );
  } 

  return (
      <IonPage>
        <Header title="Tareas" settings back={false}/>
        <IonContent fullscreen>
          <IonGrid class="list-container">
            <SearchBar elements={tasks} updateResults={updateResults}></SearchBar>
              {results.map((task:any) => {
                    return (
                        <ListItem text={task['_name']['_text']} pictogram={task['_name']['_pictogram']} href={generateHref(task)}/>
                    );
                })}
                {/*   <ListItem text={task['_name']['_text']} pictogram={task['_name']['_pictogram']} href={"/tasks/material_task_view/" + task['_id']}/>*/}

            </IonGrid>

<<<<<<< HEAD
            <PopUp label='Añadir Tarea' title='Nueva Tarea' popUpContent={popUpContent} doneAction={handleDoneClick} hasSearchBar></PopUp>
=======
            <StyledButton label='Añadir Tarea' icon={addCircleOutline} href="/create_task"></StyledButton>
         {/* <PopUp label='Añadir Tarea' title='Nueva Tarea' popUpContent={popUpContent}></PopUp> */}
>>>>>>> develop
        </IonContent>
      </IonPage>  
  );
};

export default Tasks;

