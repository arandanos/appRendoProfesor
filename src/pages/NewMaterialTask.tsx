import React, { useRef } from "react";
import { IonPage, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, useIonToast, IonCol, IonRow } from '@ionic/react';
import Header from '../components/Header';
import { checkmarkCircleOutline, closeCircleOutline, refresh } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import { useState } from "react";
import StyledButton from "../components/StyledButton";
import ModalMaterialTask from "../components/ModalMaterialTask";
import ListItem from "../components/ListItem";
import './NewMaterialTask.css'
import { sendPostRequest } from "../ApiMethods";
import StyledInput from "../components/StyledInput";
import { useHistory } from "react-router";

const NewMaterialTask: React.FC = () => {

  const list = useRef<HTMLIonListElement>(null);
  /*variables del nombre del alumno y el array con todos los materiales*/
  const [name, setName] = useState("");
  const history = useHistory();

  const [date, setDate] = useState("");
  const [materialList, setMaterialList] = useState<any>([]);

  const clearSessions = () => {
    sessionStorage.removeItem("fecha");
    sessionStorage.removeItem("auto_feedback");
    sessionStorage.removeItem("allow_comments");
  }

  // * Hook para mostrar información al añadir en la lista.
  const [present] = useIonToast();

  const presentToast = (message: string, color: string) => {
    var icon = checkmarkCircleOutline;
    if (color == 'danger'){
      icon = closeCircleOutline;
    }  
    present({
      message: message,
      duration: 2000,
      position: 'bottom',
      icon: icon,
      animated: true,
      color: color,
      cssClass: "rounded-edges"
    });
  }

  // * EVENTO Seleccionar NOMBRE DE ALUMNO
  const handleNameChange = (name: string) => {
    setName(name)
  }

  //* EVENTO AÑADIR MATERIAL: Se dispara al pulsar el botón de hecho en el modal de materiales
  const handleAddClick = ( material : any, color: any, quantity: any) => {
    var existe = materialList.filter((selected:any) => (selected.material['_id'] === JSON.parse(material)['_id']) && (selected.color['_id'] === JSON.parse(color)['_id']));

    // · Compruebo si existe ya en la lista el material seleccionado.
    if (existe.length > 0){
      var index = parseInt(existe[0].id)
     
      var newQuantity = (parseInt(quantity) + parseInt(materialList[index].quantity));
      var storageQuantity = parseInt(existe[0].color['_quantity']) - parseInt(materialList[index].quantity);
    
      // · Si la nueva cantidad supera la disponibilidad del almacén, no se añade y muestra un mensaje de error.
      if(newQuantity > storageQuantity)
        presentToast("Solo quedan " + storageQuantity + " de tipo " + existe[0].material['_name']['_text'] + ' ' + existe[0].color['_color']['_name']['_text'] + " disponibles en el almacén.", 'danger')
      else{
        // · Si no la supera, se suma la cantidad a la del elemento que había ya en la lista.
        var newList = [...materialList];
        newList[index].quantity = newQuantity.toString(); 
        setMaterialList(newList);
        presentToast("Se ha sumado "+ quantity + " a " + existe[0].material['_name']['_text'] + ' ' + existe[0].color['_color']['_name']['_text'], 'success')
      }
    // · Si no existe en la lista, se añade directamente.
    } else {
      var newItem = {id: materialList.length, quantity: quantity, material: JSON.parse(material), color: JSON.parse(color)};
      setMaterialList([...materialList, newItem]);
    }

    console.log(materialList);

  }

  // * EVENTO ELIMINAR INPUT: Se dispara al darle al botón de basura
  const handleDeleteClick = (id : string) => {
    // · Almaceno la posicion del elemento a eliminar
    var toDelete = Number(id); 

    // · Elimino el elemtento de la lista quedandome sólo con aquellos cuyo id no coincide con el que se quiere eliminar.
    var newMaterialList = materialList.filter((selected : any) => selected.id !== id);

    // · Actualizo los IDs de los elementos que quedan para que sean contiguos en todo momento.
    for (let i = toDelete; i < newMaterialList.length; i++) {
        newMaterialList[i].id--;
    }

    // · Se guarda la lista de materiales tras eliminar y actualizar los IDs
    setMaterialList(newMaterialList);
  }


  const handleCreateClick = () => {
    // TODO: POST Crear Petición.
    
    //* Creo una Tarea de Tipo Material
    sendPostRequest( "task", {
      '_due_date': sessionStorage.getItem("fecha"),
      '_name': '9',
      '_type': "MATERIAL",
      '_auto_feedback': sessionStorage.getItem("auto_feedback"),
      '_student': '1',
      '_teacher': '1'
    }).then(response => {
      //* Utilizo el id de la tarea creada para añadir una Material Task
      sendPostRequest( "material_task", {
        "_task" : response['_id'],
        // ! Faltaria hacer un input para seleccionar la clase, por ahora pongo una por defecto
        "_classroom" : '1'
      }).then( response => {
        clearSessions();
        //* Una vez creada la tarea, creo los material task detail asociados: uno por cada material almacenado en la lista
        materialList.map( (selectedMaterial: any) => {
          sendPostRequest("material_task_detail", {
            "_quantity": selectedMaterial.quantity,
            "_material": selectedMaterial.color['_id'],
            "_material_task": response['_id']
          }).then(() => {
            if(selectedMaterial === materialList.at(materialList.length -1)){
              history.push("/tasks");
            }
          })
        })
      })
    })
  }

  return (
    <IonPage>
      <Header title="Material" back settings={false} />
      <IonContent fullscreen >
        <IonGrid class="grid-with-button width-90 scroll">
          <CalendarPicker label='Selecciona fecha de la tarea' disabled={false} editButton={false} value='' />
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
                <ListItem id={selected.id} quantity={selected.quantity} text={selected.material['_name']['_text'] + " " + selected.color['_color']['_name']['_text']} handleDelete={handleDeleteClick}></ListItem>
              )
            })}
          </IonList>

          <StyledButton label="Añadir Material" id="open-modal"></StyledButton>
          <ModalMaterialTask trigger="open-modal" handleDoneClick={handleAddClick}></ModalMaterialTask>
          {/*-----------------Los toggles -----------------*/}
          <ToggleSwitch label='Auto feedback' checked id="auto_feedback" />
          <ToggleSwitch label='Comentarios' checked id="allow_comments" />
        </IonGrid>
        <StyledButton label="Crear petición" icon={checkmarkCircleOutline} id="confirm-material-task" onClick={handleCreateClick}/>
      </IonContent>
    </IonPage>
  );
};

export default NewMaterialTask;