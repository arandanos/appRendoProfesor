import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonSearchbar, IonTitle } from '@ionic/react';
import './NewAdmin.css';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import PopUp from '../components/PopUp';

const NewAdmin: React.FC = () => {

    var dataAccessibleProfesor = {id: "2", text:  "Profesor 1", 
    pictogram: "https://api.arasaac.org/api/pictograms/25111?resolution=500&download=false" };

    function makeAdmin(){
      <PopUp label="" title="" popUpContent={<IonTitle>Hola</IonTitle>}></PopUp>
    }

  return (
    <>
    
    <Header title="Nuevo Administrador" settings={true} back={false}/>

    <IonGrid class='list-container-users'>
        <IonTitle size="small" >¿A qué profesor quieres hacer administrador?</IonTitle>      
        <IonSearchbar showClearButton="focus" placeholder="Buscar profesor..." ></IonSearchbar> 
        <ListItem key="3" text={dataAccessibleProfesor['text']} pictogram={dataAccessibleProfesor['pictogram']} id={dataAccessibleProfesor['id']} handleEdit={null} handleDelete={null}></ListItem>
    </IonGrid>
      
    </>
  );
};

export default NewAdmin;
