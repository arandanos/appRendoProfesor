import React from "react";
import { IonInput, IonIcon, IonFabButton, IonItem, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import { trash } from 'ionicons/icons';
import './MaterialRow.css'
import StyledInput from "./StyledInput";

interface rows {
  id: number,
  count: number,
  material: string,
  color: string,
  id_material: string,
  max_quantity: string
}


interface MaterialRowProps{
  //* Para itentificar cada fila
  id: string;

  //* Cantidad máxima del material, determinada por el numero de materiales disponible en el almacén
  maxQuantity: string

  // * Materiales obtenidos de la API para poder seleccionarlos y añadirlos al dropdown de Material.
  materials?: Array<any>
  // * Colores obtenidos de la API según el material seleccionado para poder seleccionarlos y añadirlos al dropdown de Color.
  colors : Array<any>

  // * Funciones para manejar los diferentes Eventos
  handleCounterChange: Function;
  handleDeleteClick: Function;
  handleMaterialSelect: Function;
  handleColorSelect: Function;
}

const MaterialRow: React.FC<{ row: rows, material: never[], colors: string[], ChangingCount: Function, DeleteMaterialTaskRow: Function, ChangingMaterial: Function, ChangingColor: Function }> = (props: { row: rows, material: never[], colors: string[], ChangingCount: Function, DeleteMaterialTaskRow: Function, ChangingMaterial: Function, ChangingColor: Function }) => {

  return (
    <IonRow class="material-row">
      <IonGrid>
        <IonRow>
          <IonCol size='4'>
            <IonItem shape="round" fill="outline">
              {/* TODO: cambiar por MaterialInputsProps -> handleCounterChange */}
              <IonInput type="number" onIonChange={(e) => props.ChangingCount(e.detail.value, props.row.id)} maxlength={4} placeholder="0"></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size='8'>
            <IonItem shape="round" fill="outline">
              {/* TODO: cambiar por MaterialInputsProps -> handleMaterialSelect */}
              <IonSelect onIonChange={(e) => props.ChangingMaterial(e.detail.value, props.row.id)} interface="popover" placeholder="Material">
                {/* TODO: cambiar por MaterialInputsProps -> materials */}
                {props.material.map(mat => (
                  <IonSelectOption>{mat}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="9">
            <IonItem shape="round" fill="outline">
              {/* TODO: cambiar por MaterialInputsProps -> handleColorSelect */}
              <IonSelect className="Color" onIonChange={(e) => props.ChangingColor(e.detail.value, props.row.id)} interface="popover" placeholder="Color">
                {/* TODO: cambiar por MaterialInputsProps -> colors */}
                {props.colors.map(color => (
                  <IonSelectOption>{color}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>

          <IonCol size="3" class="center-content">
            <IonFabButton class="center" color="danger" size='small'>
              {/* TODO: cambiar por MaterialInputsProps -> handleDeleteClick */}
              <IonIcon icon={trash} onClick={() => props.DeleteMaterialTaskRow(props.row.id)}></IonIcon>
            </IonFabButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonRow>
  );

}

export default MaterialRow;