import React from "react";
import { IonInput, IonIcon, IonFabButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import { trash, addCircleOutline } from 'ionicons/icons';
import { useState, useEffect } from "react";
import './MaterialRow.css'

interface rows{
      id: number,
      count: number,
      material: string,
      color: string
}



const MaterialRow: React.FC<{row: rows, quantity: string[], material: never[], colors: string[], ChangingCount: Function, DeleteMaterialTaskRow: Function, ChangingMaterial: Function, ChangingColor: Function  }> = (props: {row: rows, quantity: string[], material: never[], colors: string[], ChangingCount: Function, DeleteMaterialTaskRow: Function, ChangingMaterial: Function, ChangingColor: Function }) => {  
    

     
    return (
        <IonRow>
                <IonGrid>
                  <IonRow>
                      <IonCol>
                      <IonLabel>Cantidad</IonLabel>
                        <IonItem shape="round" fill="outline">                          
                          <IonIcon slot="start" icon={addCircleOutline}></IonIcon>           
                          <IonInput type="number" onIonChange={(e) => props.ChangingCount(e.detail.value, props.row.id)} maxlength={4} placeholder="0"></IonInput>
                        </IonItem>
                      </IonCol>                     

                      <IonCol>
                      <IonLabel>Material</IonLabel>
                      <IonItem shape="round" fill="outline">
                      <IonSelect onIonChange={(e) => props.ChangingMaterial(e.detail.value, props.row.id)} interface="popover" placeholder="0">
                            {props.material.map( mat  => (
                              <IonSelectOption>{mat}</IonSelectOption>
                            ))}
                      </IonSelect>
                      </IonItem>
                      </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="5">
                      <IonLabel>Color</IonLabel>
                      <IonItem shape="round" fill="outline">
                        <IonSelect className="Color" onIonChange={(e) => props.ChangingColor(e.detail.value, props.row.id)}  interface="popover" placeholder="Color">
                            {props.colors.map( color => (
                              <IonSelectOption>{color}</IonSelectOption>
                            ))}
                        </IonSelect>
                      </IonItem>
                    </IonCol>

                    <IonCol offset="3">
                      <IonFabButton color="danger" size='small'>
                        <IonIcon icon={trash} onClick={() => props.DeleteMaterialTaskRow(props.row.id)}></IonIcon> 
                      </IonFabButton>  
                    </IonCol>    

                  </IonRow>

                </IonGrid>

              </IonRow>
    );
  
  }
  
  export default MaterialRow;