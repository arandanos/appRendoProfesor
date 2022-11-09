import { IonContent, IonList, IonGrid, IonSegment, IonSegmentButton, IonTabBar, IonLabel, IonText, IonIcon, IonTabButton, IonItem, IonButton, IonImg, IonRow } from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { star, addCircleOutline, checkmarkOutline, body, menu, trashBinOutline, trashOutline } from 'ionicons/icons';
import axios from 'axios';
import { API_URL } from '../variables';
{/** Para obtener datos de la API: 
  *  import { API_URL } from '../variables';
*/}

{/** Que es axios? --> Axios is an HTTP client library that allows you 
to make requests to a given endpoint */}

{/** DATA: no puedes poner imports debajo de uno de estos comentarios ya que 
lo reconoce como parte del body del código, no de la parte de los imports */}

const DishTypes: React.FC = () => {

  {/** Comprueba si está en menú (si no, entonces está en postres) */}
  const [menusActive, setMenusActive] = useState<boolean>(true);
  {/** Para los datos de menus y postres */}
  const [menus, setMenus] = useState([]);
  const [deserts, setDeserts] = useState([]);
  const [postMenu, setPostMenu] = useState(null);
  const [postDesert, setPostDesert] = useState(null); 

  {/** Queremos que obtenga los menús y postres de la base de datos, y que cree nuevos 
con el boton de Añadir */}
  const sendGetMenusRequest = () => {
    return axios({
      url: API_URL + "menus",
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return(response.data);
    })
  };
  const sendGetDesertsRequest = () => {
    return axios({
      url: API_URL + "deserts",
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return(response.data);
    })
  };
  {/** useEffect Hook para usar el get con Axios y obtener los datos de la url asignada antes*/}
  useEffect(() => {
    sendGetMenusRequest().then(data => {
      {/** Aqui habria que obtener los datos de postres y menús, que no sé si 
        están en 2 tablas distintas o estan en la misma y hay que separar los datos */}
      setMenus(data)
      /* setDeserts(data) */
    })
    sendGetDesertsRequest().then(data => {
      {/** Aqui habria que obtener los datos de postres y menús, que no sé si 
        están en 2 tablas distintas o estan en la misma y hay que separar los datos */}
      setDeserts(data)
    })
  }, [])

  {/** Para hacer POST de un nuevo menu o postre */}
  useEffect(() => {
    axios.get(API_URL).then((respone) => {
      setPostMenu(respone.data);
    })
  }, []); {/** El [] es para indicar los valores que se aplica el efecto*/}

  const createPost = () => {
    axios.post(API_URL, {
      //Cuerpo del post, datos del menu (nombre)
      name: "Nuevo menú",
    }).then((response) => {
      setPostMenu(response.data);
    })
  };

  return (
    <>
      <Header title="Tipos de Platos" back settings={false}/>
      <IonContent fullscreen>
        <IonSegment>
          <IonSegmentButton value="menus" onClick={() => {
                  setMenusActive(true);
                }}>
            <IonLabel class="btn-title">Menús</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="postres" onClick={() => {
                  setMenusActive(false);
                }}>
            <IonLabel class="btn-title">Postres</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonContent className="content">
          {/** Contenido de cada pestaña: comprueba si está en menus o postres y muestra la lista de lo
           * correspondiente.
           * TODO: importar de la API la lista de Menús y Postres y mostrarla como botones
           */}
          {menusActive ? (
            <>
            {/** Si hago un IonGrid no muestra el boton de Añadir menu */}
              <IonList>
                {
                  menus.map(menu => {
                    return (
                      <IonRow class='ion-justify-content-left'>
                        {/* Podemos crear una clase/tipo de boton para esto mejor que el por defecto */}
                        <IonButton expand="full" class="tab-list" href='#'>
                          <IonImg slot='start' class="pictogram-header" src="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false"></IonImg>
                          <IonText>{menu['_name']}</IonText>
                        </IonButton>
                      </IonRow>
                    )
                  })
                }
              </IonList> 
             
              {/* <IonList>
                <IonItem>
                  <IonButton expand="full" class="tab-list">
                    <IonImg slot='start' class="pictogram-header" src="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false" ></IonImg>
                    Menu 1
                  </IonButton>
                </IonItem>
                <IonItem>
                  <IonButton expand="full" class="tab-list">
                    <IonIcon slot="start" icon={star}></IonIcon>
                    Menu 2
                  </IonButton>
                </IonItem>
              </IonList> */}
              
              {/**
               * <IonButton class="add-button" color="blue" fill="outline" shape="round" expand="block" onClick={createPost}>
              */}
              <IonButton class="add-button" color="blue" fill="outline" shape="round" expand="block" >
              <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
                Añadir Menú
              <IonIcon slot="end" icon={checkmarkOutline}></IonIcon>
              </IonButton>
            </>
          ) : (
            <>
              <IonList>
                {
                  deserts.map(desert => {
                    return (
                      <IonRow class='ion-justify-content-left'>
                        {/* Podemos crear una clase/tipo de boton para esto mejor que el por defecto */}
                        <IonImg slot='start' class="pictogram-header" src="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false"></IonImg>
                        <IonText>{desert['_name']}</IonText>
                        <IonButton expand='block'>
                          <IonIcon slot='end' icon={trashOutline}></IonIcon>
                        </IonButton>
                      </IonRow>
                    )
                  })
                }
              </IonList> 
              
              <IonButton class="add-button" color="blue" fill="outline" shape="round" expand="block">
              <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
                Añadir Postre
              <IonIcon slot="end" icon={checkmarkOutline}></IonIcon>
              </IonButton>
            </>
          )}
        </IonContent>

      </IonContent>
    </>
  );
};

export default DishTypes;