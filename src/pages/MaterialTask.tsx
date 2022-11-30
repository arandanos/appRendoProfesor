import React from "react";
import { IonPage, IonIcon, IonFabButton, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';
import { add } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './MaterialTask.css'
import { useState, useEffect } from "react";
import MaterialRow from "../components/MaterialRow";
import { sendGetAllRequest, sendPostRequest } from "../ApiMethods";

const MaterialTask: React.FC = () => {

/*Obtener toda la tabla de materiales*/
  const [materials, setMaterials] = useState([]);
 

const url = "material"
  useEffect(() =>{
    sendGetAllRequest(url).then(data => {
      setMaterials(data)      
    })    
  }, []) 
  
  
/*Variable para los materiales en si*/ 
const [material, setMaterial] = useState([]);

const AddMaterial = () =>{

  

  materials.map(mat => {
    
      if(!material.includes(mat["_type"]["_item"]["_text"])){
        material.push(mat["_type"]["_item"]["_text"])
      }
  
  });
  
}

AddMaterial()

console.log(materials)
  
/*Fila por defecto pal grid*/
  const Primero = {
    id: 0,
    count: 0,
    material: '',
    color: '',
    id_material:'',  
    max_quantity:''  
  }

/*variables del nombre del alumno y el array con todos los materiales*/
  const [name, setName] = useState("");  
  const [rows, setRows] = useState([Primero]);
  const [date, setDate] = useState("");
 
  

/*-----------------Cambiar nombre alumno-----------------*/
  const ChangingName = (name: string) => {

    setName(name)
  }

  /*Añadir una nueva fila al grid, lo voy haciendo con ids, y para que no se repita ningun id para el tema de eliminar y demás hago ahi un poco de tratamiento refachero*/
  const addMaterialTaskRow = () => {  

    var contador = 0;
    var encontrado = false;

    var numbers = [];
/*veo todos los ids que estan en uso*/
    for(let i = 0; i<rows.length; i++){
      numbers.push(rows[i].id)
    }   
    
/*encuentro el primero que no este en uso y es el que pillo para hacer la nueva fila*/
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
      color: '',
      id_material:'',  
      max_quantity:''  
    }  
    
    setRows([...rows, newRow]) 

    setQuantity([])
    SetColor([])
    
  }

/*-----------------Eliminar una fila del grid mediante id-----------------*/
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
        color: '',
        id_material:'',  
        max_quantity:''  
      }        
      setRows([newRow])
   }, 0,1);

    setQuantity([])
    SetColor([])

  }
}

/*-----------------Cambiar el tipo de material-----------------*/
const [colors, SetColor] = useState(['']);
const ChangingMaterial = (value: string, id: number) => {
  rows[id].material = value;

  var aux = ['-- Elige un color --']

  materials.map(mat => {
  if(mat["_type"]["_item"]["_text"] == value)
      if(!aux.includes(mat["_color"]["_text"])){
        aux.push(mat["_color"]["_text"])
      }

  });

  SetColor(aux) 

}

/*-----------------Cambiar el color y asignar valores para API-----------------*/
const [quantity, setQuantity] = useState(['']);
const ChangingColor = (value: string, id: number) => {
  rows[id].color = value;
  
  materials.map(mat => {
    if(mat["_type"]["_item"]["_text"] == rows[id].material && mat["_color"]["_text"] == rows[id].color){
      rows[id].id_material = mat['_id']
      rows[id].max_quantity = mat['_quantity']
      console.log("La cantidad maxima es: " + mat['_quantity'])
    }
          
    });

}

/*-----------------Cambiar la cantidad-----------------*/
const ChangingCount = (value: number,id: number) => {
  rows[id].count = value;  
}




//Enviar POST  a la API//
const senPost = () => {
  //crear Task

  //crear MaterialTask

  //crear MaerialTaskDetail

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
                <MaterialRow row={row} quantity={quantity} material={material} colors={colors} ChangingCount= {ChangingCount} DeleteMaterialTaskRow={DeleteMaterialTaskRow} ChangingMaterial={ChangingMaterial} ChangingColor={ChangingColor} />       
               ))}
              
            

              {/*-----------------Boton Success-----------------*/}
              <IonRow text-center>
                <IonCol className='ButtonSuccess'>
                  <IonFabButton color="success" size='small' onClick={addMaterialTaskRow}>
                          <IonIcon icon={add}></IonIcon>
                  </IonFabButton>
                </IonCol>                
              </IonRow>      

              <IonRow text-center>
                <IonCol className='ButtonSuccess'>
                  <IonFabButton  size='small' onClick={() => console.log(rows)}>
                          <IonIcon icon={add}></IonIcon>
                  </IonFabButton>
                </IonCol>                
              </IonRow>        

             
                       

            </IonGrid>
                     

            

          {/*-----------------Los toggles -----------------*/}
        <IonList>
          <div>
            <ToggleSwitch id='1' label='Feedback automático' checked={false}/>
            <ToggleSwitch id='2' label='Comentarios' checked/>
          </div>
        </IonList> 
        </div>   
      </IonContent>
    </IonPage>
  );
};

export default MaterialTask;