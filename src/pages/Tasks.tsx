import { IonContent, IonPage, IonGrid, IonNav, IonSearchbar } from '@ionic/react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {sendGetAllRequest} from '../ApiMethods'
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';

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
    <></>
  )

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
            
            </IonGrid>

            <PopUp label='Añadir Tarea' title='Nueva Tarea' popUpContent={popUpContent}></PopUp>
        </IonContent>
      </IonPage>  
  );
};

export default Tasks;

