import { IonContent, IonFabButton, IonList, IonGrid, IonSegment, IonSegmentButton, IonTabBar, IonLabel, IonText, IonIcon, IonTabButton, IonItem, IonButton, IonImg, IonRow, IonTextarea } from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { star, addCircleOutline, checkmarkOutline, body, menu, trashBinOutline, trashOutline } from 'ionicons/icons';
import axios from 'axios';
import { API_URL } from '../variables';
import DishTypeButton from '../components/DishTypeButton';
import TabSwitch from '../components/TabSwitch';
/** Para obtener datos de la API: 
  *  import { API_URL } from '../variables';
*/

/** Que es axios? --> Axios is an HTTP client library that allows you 
to make requests to a given endpoint */

/** DATA: no puedes poner imports debajo de uno de estos comentarios ya que 
lo reconoce como parte del body del código, no de la parte de los imports */

const DishTypes: React.FC = () => {

  /** Comprueba si está en menú (si no, entonces está en postres) */
  const [menusActive, setMenusActive] = useState<boolean>(true);
  /** Para los datos de menus y postres */
  const [menus, setMenus] = useState([]);
  const [deserts, setDeserts] = useState([]);
  const [postMenu, setPostMenu] = useState(null);
  const [postDesert, setPostDesert] = useState(null);

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
    
  };

  {/** useEffect Hook para usar el get con Axios y obtener los datos de la url asignada antes*/ }
  useEffect(() => {
    sendGetMenusRequest().then(data => {
      setMenus(data)
      setDeserts(data)
      /* if(data['_type_id'] == "MENU")
        setMenus(data)
      else if(data['_type_id'] == "POSTRE")
        setDeserts(data) */
    })
    /* sendGetDesertsRequest().then(data => {
      setDeserts(data)
    }) */
  }, [])

  {/** Para hacer POST de un nuevo menu o postre */ }
  useEffect(() => {
    axios.get(API_URL).then((respone) => {
      setPostMenu(respone.data);
    })
  }, []); {/** El [] es para indicar los valores que se aplica el efecto*/ }

  const createPost = () => {
    axios.post(API_URL, {
      //Cuerpo del post, datos del menu (nombre)
      name: "Nuevo menú",
    }).then((response) => {
      setPostMenu(response.data);
    })
  };

  /** Declaro los arrays, de los nombres de los tabs y de elementos */
  var dishTypes: Array<string> = [];
  var arrayElementos: Array<JSX.Element> = [];

  dishTypes = ["Menús", "Postres"];

  arrayElementos = [
    <>
      <IonList>
        {
          menus.map(menu => {
            return (
              <DishTypeButton name={menu['_accessible_element']['_text']}></DishTypeButton>
            )
          })
        }
      </IonList>

      <IonButton id="trigger-menu-button" class="add-button" color="blue" fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
        Añadir Nuevo Menú
      </IonButton>
    </>,
    <>
      <IonList>
        {
          deserts.map(desert => {
            return (
              <DishTypeButton name={desert['_accessible_element']['_text']}></DishTypeButton>
            )
          })
        }
      </IonList>

      <IonButton id="trigger-desert-button" class="add-button" color="blue" fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
        Añadir Nuevo Postre
      </IonButton>
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