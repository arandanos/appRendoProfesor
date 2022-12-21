import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonImg } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import React, { useEffect, useState } from 'react';
import { addCircleOutline, cafeOutline, earOutline } from 'ionicons/icons';
import { sendGetAllRequest, sendPostRequest, sendDeleteIDRequest, sendPutRequest } from '../ApiMethods';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import PopUp from '../components/PopUp';
import ModalSearchPictogram from '../components/ModalSearchPictogram';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';


const Storage: React.FC = () => {
    
    /*para los datos de materiales*/
    const [materials, setMaterials] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    // const [nameInput, setNameInput] = useState("Nuevo");
    var name = "";
    var alt = "";
    const [pictoInput, setPictoInput] = useState("");

    const [ results, setResults ] = useState<any>([]);
  
    
    useEffect(()=>{
        sendGetAllRequest("material_type").then(data => {
            setMaterials(data);
            setResults(data); 
            setIsLoading(false);  
        })
    },[])

    const updateResults = (results:any)=>{
        setResults(results);
    }

    if(isLoading) {
        // * AQUI IRA EL SPLASH DE CARGA
        return(
          <IonPage>
            <h1>Cargando...</h1>
          </IonPage>
        );
    } 

    function newMaterial(type: string) {
        console.log("Nuevo "+ type +" creado: " + name);
        console.log("Pictograma: " + pictoInput);
        
        //POST
        sendPostRequest("accessible_element", {
          '_text': name,
          '_pictogram': pictoInput,
          '_alt': alt
        }).then(response => {
          sendPostRequest("material_type", {
            '_name': response["_id"]
          }).then(() => {
            name = ""
            setPictoInput("");
            //Recarga la pagina
            window.location.reload();
          })
        }).catch(error => console.log(error)); 
      };

      function handlePictogramClick( value : any) {
        setPictoInput(value);
      }

      function handleNameChange (value : any) {
        name = value
      }
    
      function handleAltChange (value : any) {
        alt = value;
      }

    const contentMaterial = (
    <IonList class='width-90'>
      <IonImg class='pictogram-on-button' src={pictoInput}></IonImg>
      <StyledButton id="open-pictogram-modal" icon={addCircleOutline} label="Añadir Pictograma"></StyledButton>
      <ModalSearchPictogram trigger='open-pictogram-modal' handlePictogramClick={handlePictogramClick}/>
      <StyledInput iconStart={cafeOutline} label="Nombre del Material" onIonChange={handleNameChange} maxlength={20}></StyledInput>
      <StyledInput iconStart={earOutline} label="Texto alternativo" onIonChange={handleAltChange}></StyledInput>
    </IonList>
    )

    function handleDeleteClick(id: string){
      sendDeleteIDRequest("material_type", id);
      //Recarga la pagina
      window.location.reload();
    }

    return (
        <IonPage>
            <Header title="Almacén" back settings={false}/>

            <IonContent fullscreen>
                <IonGrid class="list-container">
                    <SearchBar elements={materials} updateResults={updateResults}></SearchBar>
                    {
                      results.map((material : any) => {
                        return (
                          <ListItem key={material['_id']} text={material['_name']['_text']} pictogram={material['_name']['_pictogram']} href={"/storage/"+ material['_id']} id={material['_id']} handleDelete={handleDeleteClick}></ListItem>
                        )
                      })
                    }
                </IonGrid>
                <PopUp label='Añadir Material' title='Nuevo Material' popUpContent={contentMaterial} doneAction={newMaterial}></PopUp>
            </IonContent>
        </IonPage>
    );

};

export default Storage;