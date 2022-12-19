import React, { useRef } from "react";
import { IonPage, IonIcon, IonFabButton, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';
import { add, checkmarkCircleOutline, refresh } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import { useState, useEffect } from "react";
import { sendGetAllRequest, sendGetByIDRequest } from "../ApiMethods";
import StyledButton from "../components/StyledButton";
import ModalMaterialTask from "../components/ModalMaterialTask";
import MaterialInputs from "../components/MaterialInputs";
import ListItem from "../components/ListItem";
import render from "react-dom";

const NewMaterialTask: React.FC = () => {

  const list = useRef<HTMLIonListElement>(null);
  /*variables del nombre del alumno y el array con todos los materiales*/
  const [name, setName] = useState("");

  const [date, setDate] = useState("");
  const [materialList, setMaterialList] = useState<any>([]);

  // * EVENTO Seleccionar NOMBRE DE ALUMNO
  const handleNameChange = (name: string) => {
    setName(name)
  }

  //* EVENTO PULSAR DONE: Se dispara al pulsar el botón de hecho en el modal de materiales
  const handleDoneClick = ( material : any, color: any, quantity: any) => {
    // TODO: añadir un material a la lista

    var existe = materialList.filter((selected:any) => (selected.material['_id'] == JSON.parse(material)['_id']) && (selected.color['_id'] == JSON.parse(color)['_id']));

    if (existe.length > 0){
      var index = parseInt(existe[0].id)
      var newList = [...materialList];
      var newQuantity = (parseInt(quantity) + parseInt(newList[index].quantity));

      newList[index].quantity = newQuantity.toString(); 
      setMaterialList(newList);
    } else {
      var newItem = {id: materialList.length, quantity: quantity, material: JSON.parse(material), color: JSON.parse(color)};
      setMaterialList([...materialList, newItem]);
    }

    console.log(materialList);

  }

  const handleDeleteClick = (id : string) => {
    var toDelete = Number(id); //* Variable para almacenar la posicion del elemento a eliminar
    var newMaterialList = materialList.filter((selected : any) => selected.id != id);

    for (let i = toDelete; i < newMaterialList.length; i++) {
        newMaterialList[i].id--;
    }

    setMaterialList(newMaterialList);
  }

  return (
    <IonPage>
      <Header title="Material" back settings={false} />
      <IonContent fullscreen >
        <IonGrid class="grid-with-button width-90 scroll">
          <CalendarPicker label='Selecciona fecha de la tarea' disabled={false} editButton={false} value='' />
          <IonLabel>Encargado de la tarea</IonLabel>
          <IonItem shape="round" fill="outline">
            <IonSelect onIonChange={(e) => handleNameChange(e.detail.value)} interface="popover" placeholder="Alumno">
              <IonSelectOption value="Manuel García">Manuel García</IonSelectOption>
              <IonSelectOption value="Franciso Barrios">Franciso Barrios</IonSelectOption>
              <IonSelectOption value="Antonio Suárez">Antonio Suárez</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonList ref={list}>      
            {materialList.map((selected : any) => {
              return(
                <ListItem id={selected.id} quantity={selected.quantity} text={selected.material['_name']['_text'] + " " + selected.color['_text']} handleDelete={handleDeleteClick}></ListItem>
              )
            })}
          </IonList>

          <StyledButton label="Añadir Material" id="open-modal"></StyledButton>
          <ModalMaterialTask trigger="open-modal" handleDoneClick={handleDoneClick}></ModalMaterialTask>
          {/*-----------------Los toggles -----------------*/}
          <ToggleSwitch id='1' label='Feedback automático' checked={false} />
          <ToggleSwitch id='2' label='Comentarios' checked />
        </IonGrid>
        <StyledButton label="Crear petición" icon={checkmarkCircleOutline} id="confirm-material-task"/>
      </IonContent>
    </IonPage>
  );
};

export default NewMaterialTask;