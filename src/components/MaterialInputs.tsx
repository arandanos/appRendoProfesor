import React from "react";
import { IonInput, IonIcon, IonFabButton, IonItem, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import { magnet, trash } from 'ionicons/icons';
import './MaterialRow.css'
import ListItem from "./ListItem";


interface MaterialInputsProps{
  //* Para itentificar cada fila
  id: string;

  // * Materiales obtenidos de la API para poder seleccionarlos y añadirlos al dropdown de Material.
  materials: Array<any>
  // * Colores obtenidos de la API según el material seleccionado para poder seleccionarlos y añadirlos al dropdown de Color.
  colors: Array<any>

  //* Cantidad Máxima determinada por el numero de materiales del color selccionado que hay en el almacén
  maxQuantity: number

  // * Funciones para manejar los diferentes Eventos
  handleCounterChange: Function;
  handleDeleteClick: Function;
  handleMaterialSelect: Function;
  handleColorSelect: Function;
}

const MaterialInputs: React.FC<MaterialInputsProps> = (props: MaterialInputsProps) => {

  return (
    <IonRow class="material-row">
      <IonGrid>
        <IonRow>
          <IonCol size='4'>
            <IonItem shape="round" fill="outline">

              <IonInput type="number" onIonChange={(e) => props.handleCounterChange(e.detail.value, props.id)} max={props.maxQuantity}  min={0} placeholder="0"></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size='8'>
            <IonItem shape="round" fill="outline">
              <IonSelect onIonChange={(e) => props.handleMaterialSelect(e.detail.value, props.id)} interface="popover" placeholder="Material">
                {props.materials!.map(material => (
                  <IonSelectOption value={material['_id']
                  /** 
                   * TODO: revisar IDS para no ERORES AL SELECCIONAR
                    idMaterial: material['_id'],
                    idInput: props.id
                   */
                  } >
                    { material['_name']['_text']}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="9">
            <IonItem shape="round" fill="outline">
              <IonSelect className="Color" onIonChange={(e) => props.handleColorSelect(e.detail.value, props.id)} interface="popover" placeholder="Color">
                {/* TODO: Comprobar si se ha introducido o no */}
                {props.colors!.map(color => (
                  <IonSelectOption value={color['_id']}>{color['_text']}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>

          <IonCol size="3" class="center-content">
            <IonFabButton class="center" color="danger" size='small'>
              <IonIcon icon={trash} onClick={() => props.handleDeleteClick(props.id)}></IonIcon>
            </IonFabButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonRow>
  );

}

export default MaterialInputs;