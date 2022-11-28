import React from "react";
import { IonPage, IonIcon, IonFabButton, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';
import { add, trash, addCircleOutline } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './MaterialTask.css'
import { useState } from "react";

const MaterialTask: React.FC = () => {
  
  /*Fila por defecto pal grid*/
  const Primero = {
    id: 0,
    count: 0,
    material: '',
    color: ''
  }

{/*variables del nombre del alumno y el array con todos los materiales*/}
  const [name, setName] = useState("");  
  const [rows, setRows] = useState([Primero]);
  

{/*-----------------Cambiar nombre alumno-----------------*/}
  const ChangingName = (name: string) => {

    setName(name)
  }

  {/*Añadir una nueva fila al grid, lo voy haciendo con ids, y para que no se repita ningun id para el tema de eliminar y demás hago ahi un poco de tratamiento refachero*/}
  const addMaterialTaskRow = () => {  

    var contador = 0;
    var encontrado = false;

    var numbers = [];
{/*veo todos los ids que estan en uso*/}
    for(let i = 0; i<rows.length; i++){
      numbers.push(rows[i].id)
    }   
    
{/*encuentro el primero que no este en uso y es el que pillo para hacer la nueva fila*/}
    while(!encontrado){
      
      var aux = numbers.indexOf(contador);
      if(aux == -1){
        encontrado = true
      }

      if(!encontrado){
          contador++;
      }
                  
    }   

    const new_id = contador;   

    const newRow = {
      id: new_id,
      count: 0,
      material: '',
      color: ''
    }  
    
    setRows([...rows, newRow]) 
    
  }

{/*-----------------Eliminar una fila del grid mediante id-----------------*/}
const DeleteMaterialTaskRow = (id: number) => {
  if(rows.length != 1 && rows.length != 0){
    const newRow = rows.filter((row) => row.id !== id);
    setRows(newRow);
  }else{
    setRows([]);

    setTimeout(() => {
      const newRow = {
        id: 0,
        count: 0,
        material: '',
        color: ''
      }        
      setRows([newRow])
   }, 0,1);

  }
}

{/*-----------------Cambiar el tipo de material-----------------*/}
const ChangingMaterial = (value: string, id: number) => {
  rows[id].material = value;
}

{/*-----------------Cambiar el color-----------------*/}
const ChangingColor = (value: string, id: number) => {
  rows[id].color = value;
}

{/*-----------------Cambiar la cantidad-----------------*/}
const ChangingCount = (value: number,id: number) => {
  rows[id].count = value;
}





  return (
    <IonPage>
      <Header title="Material" back settings={false}/>
      <IonContent fullscreen > 
      <div className="width-90">  
      <IonList>
          <div>

            <IonItem>
            <CalendarPicker label='Selecciona fecha de la tarea' disabled={false} editButton={false} value=''/>
            </IonItem>
            
            <IonLabel>Seleccionar alumno</IonLabel>
            <IonItem shape="round" fill="outline">
              <IonSelect  onIonChange={(e) => ChangingName(e.detail.value)} interface="popover" placeholder="Alumno">
                <IonSelectOption value="Manuel García">Manuel García</IonSelectOption>
                <IonSelectOption value="Franciso Barrios">Franciso Barrios</IonSelectOption>
                <IonSelectOption value="Antonio Suárez">Antonio Suárez</IonSelectOption>
              </IonSelect>
            </IonItem>
            </div>
      </IonList>     
{/*Para hacer el tema de la cantidad, material ..etc he hecho un grid en donde cada fila sea pues los 3 inputs, y dentro de cada fila 2 filas para ir poniendo las cosas, en los select he hecho que en cuanto se haga un cambio
se cambien automaticamente en el array con todas las cosas, para la visualización hago que se añada una fila por cada elemento del array, con el .map*/}
            <IonGrid className="grid">              
              {rows.map(row => (
                <IonRow>
                <IonGrid>
                  <IonRow>
                      <IonCol>
                      <IonLabel>Cantidad</IonLabel>
                        <IonItem shape="round" fill="outline">                          
                          <IonIcon slot="start" icon={addCircleOutline}></IonIcon>           
                          <IonSelect name="Select1" onIonChange={(e) => ChangingCount(e.detail.value, row.id)} interface="popover" placeholder="0">
                            <IonSelectOption value="1">1</IonSelectOption>
                            <IonSelectOption value="2">2</IonSelectOption>
                            <IonSelectOption value="3">3</IonSelectOption>
                            <IonSelectOption value="4">4</IonSelectOption>
                            <IonSelectOption value="5">5</IonSelectOption>
                          </IonSelect>
                        </IonItem>
                      </IonCol>                     

                      <IonCol>
                      <IonLabel>Material</IonLabel>
                      <IonItem shape="round" fill="outline">
                      <IonSelect onIonChange={(e) => ChangingMaterial(e.detail.value, row.id)} interface="popover" placeholder="0">
                            <IonSelectOption value="Lapiz">Lápiz</IonSelectOption>
                            <IonSelectOption value="Cartulina">Cartulina</IonSelectOption>
                            <IonSelectOption value="Sacapuntas">Sacapuntas</IonSelectOption>
                      </IonSelect>
                      </IonItem>
                      </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="5">
                      <IonLabel>Color</IonLabel>
                      <IonItem shape="round" fill="outline">
                        <IonSelect className="Color" onIonChange={(e) => ChangingColor(e.detail.value, row.id)} interface="popover" placeholder="Color">
                            <IonSelectOption>Rojo</IonSelectOption>
                            <IonSelectOption>Amarillo</IonSelectOption>
                            <IonSelectOption>Verde</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonCol>

                    <IonCol offset="3">
                      <IonFabButton color="danger" size='small'>
                        <IonIcon icon={trash} onClick={() => DeleteMaterialTaskRow(row.id)}></IonIcon> 
                      </IonFabButton>  
                    </IonCol>    

                  </IonRow>

                </IonGrid>

              </IonRow>
              ))}
              
            

              {/*-----------------Boton Success-----------------*/}
              <IonRow text-center>
                <IonCol className='ButtonSuccess'>
                  <IonFabButton color="success" size='small' onClick={addMaterialTaskRow}>
                          <IonIcon icon={add}></IonIcon>
                  </IonFabButton>
                </IonCol>                
              </IonRow>                

                       

            </IonGrid>
                     

            

          {/*-----------------Los toggles -----------------*/}
        <IonList>
          <div>
            <ToggleSwitch label='Feedback automático' checked={false}/>
            <ToggleSwitch label='Comentarios' checked/>
          </div>
        </IonList> 
        </div>   
      </IonContent>
    </IonPage>
  );
};

export default MaterialTask;