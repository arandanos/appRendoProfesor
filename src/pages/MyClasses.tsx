import { IonContent, IonPage, IonGrid, IonIcon, IonInput, IonItem, IonList } from '@ionic/react';
import Header from '../components/Header';
import { sendGetAllRequest, sendGetByIDRequest } from '../ApiMethods';
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import PopUp from '../components/PopUp';
import './Pages.css'
import { briefcaseOutline } from 'ionicons/icons';

interface KitchenOrderViewProps {
	id_task?: string;
}

const MyClasses: React.FC<KitchenOrderViewProps> = (props : KitchenOrderViewProps) => {

  const [ classes, setClasses ] = useState<any>([]);
  const [ task, setTask ] = useState<any>([])

  useEffect(() =>{
    if(props.id_task){
      sendGetByIDRequest("task", props.id_task).then(data => {
        setTask(data)
      })
    } 
    sendGetAllRequest("classroom").then(data => {
      setClasses(data)
      console.log("ASAJSJ")
      console.log(data)
    })
    
 

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
      <Header title="Mis clases" settings back={false}/>
      <IonContent fullscreen>
        <IonGrid class='list-container'>
          {classes.map((classroom : any) => {
                return (
                    <ListItem href={"/supervise_kitchen_order/"+classroom['_name']['_text']} text={classroom['_name']['_text']} pictogram={classroom['_name']['_pictogram']}/>
                );
            })}
        </IonGrid>
        <PopUp label='Añadir Clase' title='Nueva Clase' popUpContent={content}></PopUp>
      </IonContent>
    </IonPage>
  );
};

export default MyClasses;
