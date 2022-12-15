import { IonContent, IonPage, IonSearchbar, IonTitle } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css';
import { IonLoading, IonList, IonGrid, IonIcon, IonItem, IonInput} from '@ionic/react';
import './UsersManagement.css';
import { useState, useEffect } from "react";
import { addCircleOutline, cafeOutline, checkmark } from 'ionicons/icons';
import { sendGetAllRequest, sendPostRequest, sendDeleteIDRequest } from '../ApiMethods';
import TabSwitch from '../components/TabSwitch';
import CreateDishPopUp from '../components/CreateDishPopUp';
import ListItem from '../components/ListItem';
import StyledButton from '../components/StyledButton';
import SearchBar from '../components/SearchBar';

const UsersManagement: React.FC = () => {

  /** Declaro los arrays, de los nombres de los tabs y de elementos */
  var UserTypes: Array<string> = [];
  var arrayElementos: Array<JSX.Element> = [];

  /**Data de ejemplo */
  var dataAccessibleAlumno = {id: "1", text:  "Alumno 1", 
  pictogram: "https://api.arasaac.org/api/pictograms/25111?resolution=500&download=false" };
  var dataAccessibleProfesor = {id: "2", text:  "Profesor 1", 
  pictogram: "https://api.arasaac.org/api/pictograms/25111?resolution=500&download=false" };
  var dataAccessibleAdmin = {id: "3", text:  "Admin 1", 
  pictogram: "https://api.arasaac.org/api/pictograms/25111?resolution=500&download=false" };

  UserTypes = ["Alumnos", "Admins", "Profesores"]

  
  arrayElementos = [
    <>      
      <IonGrid class='list-container-users'>
        <IonSearchbar showClearButton="focus" placeholder="Buscar alumno..." ></IonSearchbar> 
        <ListItem key="1" href="" text={dataAccessibleAlumno['text']} pictogram={dataAccessibleAlumno['pictogram']} id={dataAccessibleAlumno['id']} handleEdit={null} handleDelete={null}></ListItem>
      </IonGrid>
      <StyledButton label='Añadir Nuevo Alumno' icon={addCircleOutline} id="open_modal"></StyledButton>     
    </>,

    <>
      <IonGrid class='list-container-users'>
        <IonSearchbar showClearButton="focus" placeholder="Buscar administrador..." ></IonSearchbar>
        <ListItem key="2" href="" text={dataAccessibleAdmin['text']} pictogram={dataAccessibleAdmin['pictogram']} id={dataAccessibleAdmin['id']} handleEdit={null} handleDelete={null}></ListItem>
      </IonGrid>
      <StyledButton label='Añadir Nuevo Administrador' icon={addCircleOutline}  href="/newadmin"></StyledButton>     
    </>,

    <>
      <IonGrid class='list-container-users'>
        <IonSearchbar showClearButton="focus" placeholder="Buscar profesor..." ></IonSearchbar> 
        <ListItem key="3" href="" text={dataAccessibleProfesor['text']} pictogram={dataAccessibleProfesor['pictogram']} id={dataAccessibleProfesor['id']} handleEdit={null} handleDelete={null}></ListItem>
      </IonGrid>
      <StyledButton label='Añadir Nuevo Profesor' icon={addCircleOutline}></StyledButton>     
    </>
  ]

  return (
    <>

      <Header title="Gestión de usuarios" back={false} settings={true}/>
      <TabSwitch tabsNames={UserTypes} tabsComponents={arrayElementos}></TabSwitch>

    </>
  );
};

export default UsersManagement;