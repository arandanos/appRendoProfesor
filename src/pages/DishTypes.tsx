import { IonContent, IonSegment, IonSegmentButton, IonTabBar, IonLabel, IonIcon, IonTabButton, IonItem, IonButton, IonImg } from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState } from "react";
import { star, addCircleOutline, checkmarkOutline } from 'ionicons/icons';
const DishTypes: React.FC = () => {

  const [menusActive, setMenusActive] = useState<boolean>(true);
  const [desertsActive, setDesertsActive] = useState<boolean>(false);

  return (
    <>
      <Header title="Tipos de Platos" back settings={false}/>
      <IonContent fullscreen>
        <IonSegment>
          <IonSegmentButton value="menus" onClick={() => {
                  setDesertsActive(false);
                  setMenusActive(true);
                }}>
            <IonLabel class="btn-title">Menús</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="postres" onClick={() => {
                  setDesertsActive(true);
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
              <IonButton expand="full" class="tab-list">
              <IonImg slot='start' class="pictogram-header" src="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false" ></IonImg>
                Menu 1
              </IonButton>
              
              <IonButton expand="full" class="tab-list">
              <IonIcon slot="start" icon={star}></IonIcon>
                Menu 2
              </IonButton>

              <IonButton class="add-button" color="blue" fill="outline" shape="round" expand="block">
              <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
                Añadir Menú
              <IonIcon slot="end" icon={checkmarkOutline}></IonIcon>
              </IonButton>
            </>
          ) : (
            <>
              <IonButton expand="full" class="tab-list">
              <IonIcon slot="start" icon={star}></IonIcon>
                Postre 1
              </IonButton>
              
              <IonButton expand="full" class="tab-list">
              <IonIcon slot="start" icon={star}></IonIcon>
                Postre 2
              </IonButton>
              <IonButton class="add-button">Añadir Postre</IonButton>
            </>
          )}
        </IonContent>

      </IonContent>
    </>
  );
};

export default DishTypes;