import { IonLoading, IonList, IonGrid, IonPage, IonImg} from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { addCircleOutline, cafeOutline, earOutline } from 'ionicons/icons';
import { sendGetAllRequest, sendPostRequest, sendDeleteIDRequest } from '../ApiMethods';
import TabSwitch from '../components/TabSwitch';
import CreateDishPopUp from '../components/CreateDishPopUp';
import ListItem from '../components/ListItem';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import ModalSearchPictogram from '../components/ModalSearchPictogram';


const DishTypes: React.FC = () => {

  /** Para los datos de menus y postres */
  const [dishes, setDishes] = useState([]);

  var alt = "";
  var name = "";
  const [pictoInput, setPictoInput] = useState("");


  /** useEffect Hook para usar el get con Axios y obtener los datos de la url asignada antes*/ 
  useEffect(() => {
    sendGetAllRequest("dish").then(data => {
      setDishes(data)
      setIsLoading(false)
    })
  }, [])

  /** Declaro los arrays, de los nombres de los tabs y de elementos */
  var tabNames: Array<string> = [];
  var tabComponents: Array<JSX.Element> = [];

  tabNames = ["Menús", "Postres"];

  /**
   * Funcion llamada desde el popup que hace post del plato con los inputs introducidos
   */
  function newDish(type: string) {
    console.log("Nuevo "+ type +" creado: " + name);
    console.log("Pictograma: " + pictoInput);
    console.log("Texto Alternativo: " + alt);
    
    //POST
    sendPostRequest("accessible_element", {
      '_text': name,
      '_pictogram': pictoInput,
      '_alt': alt
    }).then(response => {
      sendPostRequest("dish", {
        '_name': response["_id"],
        '_type': type
      }).then(response => {
        setPictoInput("");
        name= "";
        alt="";

        //Recarga la pagina
        window.location.reload();
      })
    }).catch(error => console.log(error));

  };
  /**
   * Funcion llamada desde el boton de papelera de cada item
   */
  function deleteDish(id: string){
    sendDeleteIDRequest("dish", id);
    //Recarga la pagina
    window.location.reload();
  }

  function handlePictogramClick( value : any) {
    setPictoInput(value);
  }

  function handleNameChange (value : any) {
    name = value;
  }

  function handleAltChange (value : any) {
    alt = value;
  }

  const contentMenu = (
    <IonList class='width-90'>
      <IonImg class='pictogram-on-button' src={pictoInput}></IonImg>
      <StyledButton id="open-pictogram-modal" icon={addCircleOutline} label="Añadir Pictograma"></StyledButton>     
      <ModalSearchPictogram trigger='open-pictogram-modal' handlePictogramClick={handlePictogramClick}/>
      <StyledInput iconStart={cafeOutline} label="Nombre del Menú" onIonChange={handleNameChange} maxlength={20}></StyledInput>
      <StyledInput iconStart={earOutline} label="Texto alternativo" onIonChange={handleAltChange}></StyledInput>
    </IonList>
  )
  const contentDesert = (
    <IonList class='width-90'>
      <IonImg class='pictogram-on-button' src={pictoInput}></IonImg>
      <StyledButton id="open-pictogram-modal" icon={addCircleOutline} label="Añadir Pictograma"></StyledButton>
      <ModalSearchPictogram trigger='open-pictogram-modal' handlePictogramClick={handlePictogramClick}/>
      <StyledInput iconStart={cafeOutline} label="Nombre del Postre" onIonChange={handleNameChange} maxlength={20}></StyledInput>
      <StyledInput iconStart={earOutline} label="Texto alternativo" onIonChange={handleAltChange}></StyledInput>
    </IonList>
  )

  tabComponents = [
    <>
      <IonGrid class='list-container list-container-dishes'>
        { 
          dishes.map(menu => {
            if (menu['_type'] === "MENU") {
              return (
                <ListItem key={menu['_id']} href="dish_types" text={menu['_name']['_text']} pictogram={menu['_name']['_pictogram']} id={menu['_id']} handleEdit={null} handleDelete={deleteDish}></ListItem>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <CreateDishPopUp label='Añadir Menú' title='Nuevo Menú' popUpContent={contentMenu} type='MENU' newDish={newDish}></CreateDishPopUp>
    </>,
    <>
      <IonGrid class='list-container list-container-dishes'>
        {
          dishes.map(postre => {
            if (postre['_type'] === "POSTRE") {
              return (
                <ListItem key={postre['_id']} href="dish_types" text={postre['_name']['_text']} pictogram={postre['_name']['_pictogram']} id={postre['_id']} handleEdit={null} handleDelete={deleteDish}></ListItem>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <CreateDishPopUp label='Añadir Postre' title='Nuevo Postre' popUpContent={contentDesert} type='POSTRE' newDish={newDish}></CreateDishPopUp>      
    </>
  ]

  //Pantalla de carga:
  const [isLoading, setIsLoading] = useState(true);

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
      <Header title="Tipos de platos" settings />
  
      <TabSwitch tabsNames={tabNames} tabsComponents={tabComponents}></TabSwitch>
    </IonPage>
  );
};

export default DishTypes;