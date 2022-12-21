import { IonContent, IonPage, IonGrid, IonNav, IonSearchbar, IonInput, IonItem, InputChangeEventDetail, IonList, IonImg, IonPopover } from '@ionic/react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {sendDeleteIDRequest, sendGetAllRequest, sendGetARASAACRequest} from '../ApiMethods'
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';
import StyledButton from '../components/StyledButton';
import { addCircleOutline } from 'ionicons/icons';

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

 
  const popUpContent = ( 
    <>
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

  const handleDeleteClick = (id: string) => {
    sendDeleteIDRequest('task', id);
    window.location.reload();
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
                        <ListItem id={task['_id']} text={task['_name']['_text']} pictogram={task['_name']['_pictogram']} href={generateHref(task)} handleDelete={handleDeleteClick}/>
                    );
                })}

            </IonGrid>

            <StyledButton label='Añadir Tarea' icon={addCircleOutline} href="/create_task"></StyledButton>
        </IonContent>
      </IonPage>  
  );
};

export default Tasks;

