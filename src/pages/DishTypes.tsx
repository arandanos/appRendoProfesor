import { NavComponentWithProps, IonLoading, IonList, IonGrid, IonIcon, IonItem, IonInput, IonButton, IonFab, IonFabButton} from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { addCircleOutline, cafeOutline, checkmark } from 'ionicons/icons';
import axios from 'axios';
import { API_URL } from '../variables';
import TabSwitch from '../components/TabSwitch';
import DishesList from '../components/DishesList';
import CreateDishPopUp from '../components/CreateDishPopUp';


const DishTypes: React.FC = () => {

  /** Para los datos de menus y postres */
  const [dishes, setDishes] = useState([]);
  const [post, setPost] = useState(null);
  const [showLoading, setShowLoading] = useState(true);
  const [nameInput, setNameInput] = useState("Nuevo");
  const [pictoInput, setPictoInput] = useState("https://api.arasaac.org/api/pictograms/29839?resolution=500&download=false");

  /** Queremos que obtenga los menús y postres de la base de datos, y que cree nuevos 
con el boton de Añadir */
  const sendGetMenusRequest = () => {
    return axios({
      url: API_URL + "dish",
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return (response.data);
    })
  };

  {/** useEffect Hook para usar el get con Axios y obtener los datos de la url asignada antes*/ }
  useEffect(() => {
    sendGetMenusRequest().then(data => {
      setDishes(data)
      setIsLoading(false)
      setShowLoading(false)
      //separateDishes()
    })
  }, [])

  /** POST de un menú 
   * Cuando queramos crear un nuevo menú, primero hay que crear una nueva entrada en la tabla Accessible element
   * y luego la entrada en la tabla Dish
   * Formato de post: axios.post(url[, data[, config]])
  */
  useEffect(() => {
    axios.get(API_URL+"dish").then((response) => {
      setPost(response.data);
    });
  }, []);

  //POST
  const sendPostRequest = async (name: string, pictogram: string, type: string) => {
    //Crea la entrada en la tabla accessible_element
    const response = await axios({
      url: API_URL + "accessible_element",
      method: "post",
      data: {
        "_text": name,
        "_pictogram": pictogram,
      }
    });
    console.log(response.data);
    //Crea la entrada en la tabla dish
    const response_1 = await axios({
      url: API_URL + "dish",
      method: "post",
      data: {
        "_name": response.data['_id'],
        "_type": type,
      }
    });
    console.log(response_1.data);
    return (response_1.data);
  }
  //DELETE
  const sendDeleteRequest = (id: string) => {
    return axios({
      url: API_URL+"dish/"+id,
      method: "delete",
    }).then(response => {
      console.log(response.data);
      return(response.data);
    })
  }

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
    //createPost(nameInput, pictoInput, type);
    sendPostRequest(nameInput, pictoInput, type);

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
    sendDeleteRequest(id);
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
                <DishesList key={menu['_id']} text={menu['_name']['_text']} pictogram={menu['_name']['_pictogram']} id={menu['_id']} deleteDish={deleteDish}></DishesList>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <CreateDishPopUp label='Añadir Menú' title='Nuevo Menú' popUpContent={contentMenu} type='MENU' newDish={newDish}></CreateDishPopUp>
      {/* <PopUp label='Añadir Menú' title='Nuevo Menú' popUpContent={contentMenu}></PopUp> */}
      {/* {idNuevo = 15}
      {dataAccessible = {id: idNuevo, text:  "Menu nuevo", pictogram: "https://api.arasaac.org/api/pictograms/6961?resolution=500&download=false" }}
      {dataDish = {id: 4, type: "MENU", accessible_element: dataAccessible}} */}
      {/* <IonButton onClick={createPost} id="trigger-menu-button" class="add-button" color="blue" fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
        Añadir Nuevo Menú
      </IonButton> */}
    </>,
    <>
      <IonGrid class='list-container-dishes'>
        {
          dishes.map(postre => {
            if (postre['_type'] === "POSTRE") {
              return (
                <DishesList key={postre['_id']} text={postre['_name']['_text']} pictogram={postre['_name']['_pictogram']} id={postre['_id']} deleteDish={deleteDish}></DishesList>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      
      {/* TODO Post en el popUp de los datos que reciban los inputs */}
      {/* ? haria el post el componente al cual se le pasa la ruta a la que debe hacerlo? */}
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

  /* setTimeout(() => {
    setShowLoading(false);
  }, 2000); */

  return (
    <>
      <Header title="Tipos de platos" settings back={false} />
  
      <TabSwitch tabsNames={dishTypes} tabsComponents={arrayElementos}></TabSwitch>
    </>
  );
};

export default DishTypes;