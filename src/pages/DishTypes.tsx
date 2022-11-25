import { IonContent, IonFabButton, IonList, IonGrid, IonSegment, IonSegmentButton, IonTabBar, IonLabel, IonText, IonIcon, IonTabButton, IonItem, IonButton, IonImg, IonRow, IonTextarea, IonInput } from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { cafeOutline } from 'ionicons/icons';
import axios from 'axios';
import { API_URL } from '../variables';
import DishTypeButton from '../components/DishTypeButton';
import TabSwitch from '../components/TabSwitch';
import StyledButton from '../components/StyledButton';
import TaskList from '../components/TasksList';
import PopUp from '../components/PopUp';

/** Para obtener datos de la API: 
  *  import { API_URL } from '../variables';
*/

/** Que es axios? --> Axios is an HTTP client library that allows you 
to make requests to a given endpoint */

/** DATA: no puedes poner imports debajo de uno de estos comentarios ya que 
lo reconoce como parte del body del código, no de la parte de los imports */

const DishTypes: React.FC = () => {

  /** Para los datos de menus y postres */
  const [menus, setMenus] = useState([]);
  const [deserts, setDeserts] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [post, setPost] = useState(null);

  /** Queremos que obtenga los menús y postres de la base de datos, y que cree nuevos 
con el boton de Añadir */
  const sendGetMenusRequest = () => {
    return axios({
      url: API_URL + "dish",
      //url: API_URL + "menus",
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return (response.data);
    })
  };
  /* const sendGetDesertsRequest = () => {
    return axios({
      url: API_URL + "dish",
      //url: API_URL + "deserts",
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return (response.data);
    })
  }; */

  /** Metodo para separar en menus y postres */
  const separateDishes = () => {
    dishes.map(dish => {
      if (dish['_type'] === "MENU") {
        setMenus(dish)
      } else {
        setDeserts(dish)
      }
    });
  };

  {/** useEffect Hook para usar el get con Axios y obtener los datos de la url asignada antes*/ }
  useEffect(() => {
    sendGetMenusRequest().then(data => {
      setDishes(data)
      //separateDishes()
    })
    /* sendGetDesertsRequest().then(data => {
      setDeserts(data)
    }) */
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
      window.location.reload();
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

  const contentMenu = (
    <IonList class='width-90' >
      <IonItem fill="outline" shape="round">
        <IonIcon slot="start" icon={cafeOutline} />
        <IonInput type="text" placeholder='Nombre del Menú' ></IonInput>
      </IonItem>

    </IonList>
  )
  const contentDesert = (
    <IonList class='width-90' >
      <IonItem fill="outline" shape="round">
        <IonIcon slot="start" icon={cafeOutline} />
        <IonInput type="text" placeholder='Nombre del Postre' ></IonInput>
      </IonItem>

    </IonList>
  )

  arrayElementos = [
    <>
      <IonGrid class='list-container'>
        { 
          dishes.map(menu => {
            if (menu['_type'] === "MENU") {
              return (
                <TaskList text={menu['_accessible_element']['_text']} pictogram={menu['_accessible_element']['_pictogram']}></TaskList>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <PopUp label='Añadir Menú' title='Añadir Nuevo Menú' popUpContent={contentMenu} ></PopUp>
      {/* {idNuevo = 15}
      {dataAccessible = {id: idNuevo, text:  "Menu nuevo", pictogram: "https://api.arasaac.org/api/pictograms/6961?resolution=500&download=false" }}
      {dataDish = {id: 4, type: "MENU", accessible_element: dataAccessible}} */}
      {/* <IonButton onClick={createPost} id="trigger-menu-button" class="add-button" color="blue" fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
        Añadir Nuevo Menú
      </IonButton> */}
    </>,
    <>
      <IonGrid class='list-container'>
        {
          dishes.map(postre => {
            if (postre['_type'] === "POSTRE") {
              return (
                <TaskList text={postre['_accessible_element']['_text']} pictogram={postre['_accessible_element']['_pictogram']}></TaskList>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
        
      <PopUp label='Añadir Postre' title='Añadir Nuevo Postre' popUpContent={contentDesert} ></PopUp>
      {/* <IonButton onClick={createPost} id="trigger-desert-button" class="add-button" color="blue" fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
        Añadir Nuevo Postre
      </IonButton> */}
    </>
  ]

  return (
    <>
      <Header title="Tipos de platos" settings back={false} />

      <TabSwitch tabsNames={dishTypes} tabsComponents={arrayElementos}></TabSwitch>
    </>
  );
};

export default DishTypes;