import { IonContent, IonPage, IonGrid, IonIcon, IonInput, IonItem, IonList } from '@ionic/react';
import Header from '../components/Header';
import { sendGetAllRequest, sendGetByIDRequest } from '../ApiMethods';
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import PopUp from '../components/PopUp';
import './Pages.css'
import { briefcaseOutline } from 'ionicons/icons';
import { useParams } from 'react-router';

interface KitchenOrderViewProps {
	id_task?: string;
}

const MyClasses: React.FC<KitchenOrderViewProps> = (props : KitchenOrderViewProps) => {

  const [ classes, setClasses ] = useState<any>([]);
  const [ task, setTask ] = useState<any>([]);
  const [title, setTitle] = useState<string>("");

  type params = {
    type_task?: string;
  }

  const {type_task} = useParams<params>();

  useEffect(() =>{
    if(props.id_task){
      sendGetByIDRequest("task", props.id_task).then(data => {
        setTask(data)
      })
    } 
    sendGetAllRequest("classroom").then(data => {
      setClasses(data)
    })
    if(type_task != undefined){
      setTitle("Elige una clase");
    } else {
      setTitle("Mis Clases");
    }
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
      <Header title={title} settings back={false}/>
      <IonContent fullscreen>
        <IonGrid class='list-container'>
          {classes.map((classroom : any) => {
            console.log("ILLO "+type_task);
            if (type_task != undefined)
              return (
                /** Inicialmente solo supervisa la comanda de cocina. Si queremos que supervise 
                 * cualquier tipo, dependiendo de la lista de Tareas, es necesario pasarle como
                 * argumento la direccion --> /my_classes/<tipo_tarea>  
                 * para que sepa que tipo de tarea quiere ver de la clase
                 * <ListItem href={type+classroom['_name']['_text']} text={classroom['_name']['_text']} pictogram={classroom['_name']['_pictogram']}>
                 */
                <ListItem href={type_task + "/" + classroom['_name']['_text']} text={classroom['_name']['_text']} pictogram={classroom['_name']['_pictogram']} />
              );
            else {
              return(
                <ListItem text={classroom['_name']['_text']} pictogram={classroom['_name']['_pictogram']} />
              );
            }
            })}
        </IonGrid>
        <PopUp label='Añadir Clase' title='Nueva Clase' popUpContent={content}></PopUp>
      </IonContent>
    </IonPage>
  );
};

export default MyClasses;
