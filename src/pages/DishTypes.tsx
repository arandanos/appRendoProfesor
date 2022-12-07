import { IonLoading, IonList, IonGrid, IonIcon, IonItem, IonInput} from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { addCircleOutline, cafeOutline, checkmark } from 'ionicons/icons';
import { sendGetAllRequest, sendPostRequest, sendDeleteIDRequest } from '../ApiMethods';
import TabSwitch from '../components/TabSwitch';
import CreateDishPopUp from '../components/CreateDishPopUp';
import ListItem from '../components/ListItem';


const DishTypes: React.FC = () => {

  /** Para los datos de menus y postres */
  const [dishes, setDishes] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [nameInput, setNameInput] = useState("Nuevo");
  const [pictoInput, setPictoInput] = useState("https://api.arasaac.org/api/pictograms/29839?resolution=500&download=false");


  /** useEffect Hook para usar el get con Axios y obtener los datos de la url asignada antes*/ 
  useEffect(() => {
    sendGetAllRequest("dish").then(data => {
      setDishes(data)
      setIsLoading(false)
      setShowLoading(false)
    })
  }, [])

  /** Declaro los arrays, de los nombres de los tabs y de elementos */
  var dishTypes: Array<string> = [];
  var arrayElementos: Array<JSX.Element> = [];
  /* var dataAccessible = {id: 15, text:  "Menu nuevo", 
  pictogram: "https://api.arasaac.org/api/pictograms/25111?resolution=500&download=false" };
  */

  dishTypes = ["Menús", "Postres"];

  const handleNameInput = (e: any) => {
    sessionStorage.setItem("name", e.target.value)
    setNameInput(e.target.value)
  };
  const handlePictoInput = (e: any) => {
    sessionStorage.setItem("pictogram", e.target.value)
    setPictoInput(e.target.value)
  };
  /**
   * Funcion llamada desde el popup que hace post del plato con los inputs introducidos
   */
  function newDish(type: string) {
    console.log("Nuevo "+ type +" creado: " + nameInput);
    console.log("Pictograma: " + pictoInput);
    
    //POST
    sendPostRequest("accessible_element", {
      "_text": nameInput,
      "_pictogram": pictoInput
    }).then(response => {
      sendPostRequest("dish", {
        "_name": response["_id"],
        "_type": type
      })
    }).catch(error => console.log(error));

    setNameInput("");
    setPictoInput("");
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("pictogram", "");
    //Recarga la pagina
    window.location.reload();
  };
  /**
   * Funcion llamada desde el boton de papelera de cada item
   */
  function deleteDish(id: string){
    sendDeleteIDRequest("dish", id);
    //Recarga la pagina
    window.location.reload();
  }

  const contentMenu = (
    <IonList class='width-90'>
      <IonItem class='item-list' fill="outline" shape="round" counter={true}>
        <IonIcon slot="start" icon={cafeOutline} />
        <IonInput type="text" placeholder='Nombre del Menú' maxlength={20} onIonChange={handleNameInput}></IonInput>
      </IonItem>
      <IonItem fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline} />
        <IonInput type="text" placeholder='Pictograma' onIonChange={handlePictoInput}></IonInput>
      </IonItem>
    </IonList>
  )
  const contentDesert = (
    <IonList class='width-90'>
      <IonItem class='item-list' fill="outline" shape="round" counter={true}>
        <IonIcon slot="start" icon={cafeOutline} />
        <IonInput type="text" placeholder='Nombre del Postre' maxlength={20} onIonChange={handleNameInput}></IonInput>
      </IonItem>
      <IonItem fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline} />
        <IonInput type="text" placeholder='Pictograma' onIonChange={handlePictoInput}></IonInput>
      </IonItem>
    </IonList>
  )

  arrayElementos = [
    <>
      <IonGrid class='list-container-dishes'>
        { 
          dishes.map(menu => {
            if (menu['_type'] === "MENU") {
              return (
                <ListItem key={menu['_id']} href="dish_types" text={menu['_name']['_text']} pictogram={menu['_name']['_pictogram']} id={menu['_id']} editItem={null} deleteItem={deleteDish}></ListItem>
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
      <IonGrid class='list-container-dishes'>
        {
          dishes.map(postre => {
            if (postre['_type'] === "POSTRE") {
              return (
                <ListItem key={postre['_id']} href="dish_types" text={postre['_name']['_text']} pictogram={postre['_name']['_pictogram']} id={postre['_id']} editItem={null} deleteItem={deleteDish}></ListItem>
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

  if(isLoading){
    return(
      <div className='App'>
        <IonLoading 
          isOpen={showLoading} 
          onDidPresent={() => setShowLoading(true)}
          message={'Cargando...'}
          duration={1000}
        />
      </div>
    );
  }

  return (
    <>
      <Header title="Tipos de platos" settings back={false} />
  
      <TabSwitch tabsNames={dishTypes} tabsComponents={arrayElementos}></TabSwitch>
    </>
  );
};

export default DishTypes;