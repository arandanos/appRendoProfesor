import React, { useRef } from "react";
import { IonInput, IonIcon, IonFabButton, IonItem, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import { magnet, trash } from 'ionicons/icons';
import './MaterialRow.css'
import ListItem from "./ListItem";
import StyledButton from "./StyledButton";
import StyledInput from "./StyledInput";


interface MaterialInputsProps{
  // * Materiales obtenidos de la API para poder seleccionarlos y añadirlos al dropdown de Material.
  materials: Array<any>;
  // * Colores obtenidos de la API según el material seleccionado para poder seleccionarlos y añadirlos al dropdown de Color.
  colors: Array<any>;

  //* Cantidad Máxima determinada por el numero de materiales del color selccionado que hay en el almacén
  maxQuantity: number;

  // * Funciones para manejar los diferentes Eventos
  handleCounterChange: Function;
  handleDeleteClick?: Function;
  handleMaterialSelect: Function;
  handleColorSelect: Function;
}

const MaterialInputs: React.FC<MaterialInputsProps> = (props: MaterialInputsProps) => {
  const selectMaterial = useRef<HTMLIonSelectElement>(null);

  return (
    <IonRow class="material-row">
      <IonGrid>
        <IonRow>
          
          <IonCol size='12'>
            <IonItem shape="round" fill="outline">
              <IonSelect onIonChange={(e) => props.handleMaterialSelect(e.detail.value)} interface="popover" placeholder="Material">
                {props.materials!.map(material => (
                    <IonSelectOption value={material}>
                    { material['_name']['_text'] }
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="8">
            <IonItem shape="round" fill="outline">
              <IonSelect className="Color" onIonChange={(e) => props.handleColorSelect(e.detail.value)} interface="popover" placeholder="Color">
                {/* TODO: Comprobar si se ha introducido o no */}
                {props.colors!.map(color => (
                  <IonSelectOption value={color}>{color['_text']}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size='4'>
            <IonItem shape="round" fill="outline">
              <IonInput type="number" onIonChange={(e) => props.handleCounterChange(e.detail.value)} max={props.maxQuantity}  min={0} placeholder="0"></IonInput>
            </IonItem>
          </IonCol>

          <IonCol size="3" class="center-content">
            {/* <IonFabButton class="center" color="danger" size='small'>
              <IonIcon icon={trash} onClick={() => props.handleDeleteClick(props.id, selectMaterial)}></IonIcon>
            </IonFabButton> */}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonRow>
  );

}

export default MaterialInputs;