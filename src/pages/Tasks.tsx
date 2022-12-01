import { IonContent, IonPage, IonGrid, IonNav, IonSearchbar } from '@ionic/react';
import Header from '../components/Header';
import {sendGetAllRequest} from '../ApiMethods'
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import './Pages.css'
import PopUp from '../components/PopUp';

const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [results, setResults] = useState<any>([]);

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

   //** Código para el buscador */

   const resultsFilter = (tasks: any[], query : string) => {
      var results : any = [];
      tasks.map( task => {
        if (task['_name']['_text'].toLowerCase().includes(query.toLowerCase())){
          results.push(task);
        }
      })
      return results;
   }

   const handleSearchChange = (e: Event) => {
    let query = "";
    const target = e.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setResults(resultsFilter(tasks, query))
   }
  
   //********/

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
            <IonSearchbar showClearButton="focus" placeholder="Buscar tarea..." onIonChange={(e)=>handleSearchChange(e)}></IonSearchbar>
              {results.map((task:any) => {
                    return (
                        <ListItem text={task['_name']['_text']} pictogram={task['_name']['_pictogram']}/>
                    );
                })}
            
            </IonGrid>

            <PopUp label='Añadir Tarea' title='Nueva Tarea' popUpContent={popUpContent}></PopUp>
        </IonContent>
      </IonPage>  
  );
};

export default Tasks;

