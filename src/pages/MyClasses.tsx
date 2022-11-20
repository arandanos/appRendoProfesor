import { IonContent, IonPage, IonGrid, IonButton, IonIcon, IonFabButton, IonLabel, IonPopover, IonTextarea, IonButtons, IonHeader, IonInput, IonItem, IonModal, IonTitle, IonToolbar, IonCard, IonAvatar, IonImg, IonList, IonFab } from '@ionic/react';
import Header from '../components/Header';
import { API_URL } from '../variables';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import MyClassesList from '../components/MyClassesList';
import { addCircleOutline, briefcaseOutline, checkmark, closeOutline } from 'ionicons/icons';
import { checkmarkOutline } from 'ionicons/icons';
import './Pages.css'
import { OverlayEventDetail } from '@ionic/core/components';


const MyClasses: React.FC = () => {

  const [ classes, setClasses ] = useState<any>([]);


  const sendGetRequest = () => {

    return axios({
      url: API_URL + "classroom",
      method: 'get'
    }).then(response => {

      //console.log(response.data);
      return response.data;
    })
  };

  //sendGetRequest();

  useEffect(() =>{
    sendGetRequest().then(data => {
      setClasses(data)
    })

  }, [])

  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonPage>
      <Header title="Mis clases" settings back={false}/>
      <IonContent fullscreen>
      <IonGrid>
        {classes.map((element: { [x: string]: { [x: string]: string; }; }) => {
              return (
                  <MyClassesList text={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']}/>
              );
          })}
       
       <IonButton id="open-modal" expand="block">
          Añadir Clase
        </IonButton>
        <IonModal class="pop-up-modal" ref={modal} trigger="open-modal">
          <IonContent scrollY={false}>

              <IonToolbar>
                <IonTitle>Añadir Nueva Clase</IonTitle>
                <IonButtons slot="end">
                  <IonButton color="light" onClick={() => dismiss()}>
                    <IonIcon slot="start" icon={closeOutline}></IonIcon>
                  </IonButton>
                </IonButtons>
              </IonToolbar>

            <IonList class='width-90' >
              <IonItem  fill="outline" shape="round">
                  <IonIcon slot="start" icon={briefcaseOutline} />
                  <IonInput type="text" placeholder='Nombre de la Clase' ></IonInput>
                {/* <IonLabel>
                  <h2>Nombre Clase</h2>
                  <p>Contenido de Prueba</p>
                </IonLabel> */}
              </IonItem>
              
            </IonList>
            <IonFab vertical="bottom" horizontal='center'>
              <IonFabButton color="success" >
                <IonIcon icon={checkmark}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonContent>
        </IonModal>
        </IonGrid>

        {/* <AddButton text='Añadir nueva clase' /> */}
        {/** CONVERTIR EN BOTÓN BIEN!! */}
        {/* <IonButton id="trigger-menu-button" class="add-button" fill="outline" shape="round" expand="block" >
              <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
              Añadir nueva clase
        </IonButton>

        <IonPopover class="popup" trigger="trigger-menu-button" reference='trigger' side='top' alignment='start'>
         <IonLabel class="ion-padding">Crear Nuevo Menú</IonLabel>
         <IonTextarea placeholder="Tipo/Nombre del menú"></IonTextarea>
         <IonButton class="add-pictogram-button" fill="outline" shape="round">
           <IonIcon icon={addCircleOutline} />
           Subir Pictograma
         </IonButton>
         <IonFabButton slot="end" size="small" href="/dish_types">
           <IonIcon icon={checkmarkOutline} />
         </IonFabButton>
       </IonPopover> */}

      </IonContent>
    </IonPage>
  );
};

export default MyClasses;
