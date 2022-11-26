import { NavComponentWithProps, IonLoading, IonList, IonGrid, IonIcon, IonItem, IonInput, IonButton, IonFab, IonFabButton} from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { addCircleOutline, cafeOutline, checkmark } from 'ionicons/icons';
import axios from 'axios';
import { API_URL } from '../variables';
import TabSwitch from '../components/TabSwitch';
import PopUp from '../components/PopUp';
import DishesList from '../components/DishesList';


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
  //No le paso parametros a createPost aun (post manual)
  const createPost = () => {
    axios.post(API_URL+"dish", {
      _type: "MENU",
      _name: "11",
    })
    .then((response) => {
      //setDishes([...dishes, dish])
      setPost(response.data);
      //Recargo la pagina para que actualice la lista --> Cambiar para que lo haga sin tener que recargar
      //window.location.reload();
    });
  };

  /* const sendPostAccessibleElement = (data : {}) => {
    return axios({
      url: API_URL + "accessible_element",
      method: 'post',
      data: data
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  }

  const sendPostDish = (data : {}) => {
    return axios({
      url: API_URL + "dish",
      method: 'post',
      data: data
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  }

  const sendPost = (dataAccessible: {}, dataDish : {}) => {
    sendPostAccessibleElement(dataAccessible);
    sendPostDish(dataDish);
  }

  const createPost = () => {
    sendPost(dataAccessible, dataDish);
  } */

  /** Declaro los arrays, de los nombres de los tabs y de elementos */
  var dishTypes: Array<string> = [];
  var arrayElementos: Array<JSX.Element> = [];
  /* var dataAccessible = {id: 15, text:  "Menu nuevo", pictogram: "https://api.arasaac.org/api/pictograms/6961?resolution=500&download=false" };
  var dataDish =  {id: 4, type: "MENU", accessible_element: dataAccessible};
  var idNuevo: number; */

  dishTypes = ["Menús", "Postres"];

  const handleNameInput = (e: any) => {
    setNameInput(e.target.value)
  };
  const handlePictoInput = (e: any) => {
    setPictoInput(e.target.value)
  };
  const logValue = () => {
    console.log("Nombre: "+nameInput);
    console.log("Pictograma: "+pictoInput);
  };

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
        <IonButton onClick={logValue}></IonButton>
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
                <DishesList text={menu['_accessible_element']['_text']} pictogram={menu['_accessible_element']['_pictogram']}></DishesList>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <PopUp label='Añadir Menú' title='Nuevo Menú' popUpContent={contentMenu}></PopUp>
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
                <DishesList text={postre['_accessible_element']['_text']} pictogram={postre['_accessible_element']['_pictogram']}></DishesList>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      
      {/* TODO Post en el popUp de los datos que reciban los inputs */}
      {/* ? haria el post el componente al cual se le pasa la ruta a la que debe hacerlo? */}
      <PopUp label='Añadir Postre' title='Nuevo Postre' popUpContent={contentDesert} ></PopUp>
      
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