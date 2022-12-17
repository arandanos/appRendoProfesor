import React from "react";
import { IonPage, IonIcon, IonFabButton, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';
import { add, checkmarkCircleOutline } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import { useState, useEffect } from "react";
import { sendGetAllRequest, sendGetByIDRequest } from "../ApiMethods";
import StyledButton from "../components/StyledButton";
import ModalMaterialTask from "../components/ModalMaterialTask";
import MaterialInputs from "../components/MaterialInputs";

const NewMaterialTask: React.FC = () => {

  /*variables del nombre del alumno y el array con todos los materiales*/
  const [name, setName] = useState("");

  const [date, setDate] = useState("");

  // * EVENTO Seleccionar NOMBRE DE ALUMNO
  const handleNameChange = (name: string) => {
    setName(name)
  }

  //* EVENTO PULSAR DONE: Se dispara al pulsar el botón de hecho en el modal de materiales
  const handleDoneClick = (materialInputs: []) => {
    // TODO: post a la API de la nueva tarea
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

          <StyledButton label="Añadir Materiales" id="open-modal"></StyledButton>
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