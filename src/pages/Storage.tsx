import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import '../ApiMethods'
import React, { useEffect, useState } from 'react';
import { addCircleOutline, cafeOutline } from 'ionicons/icons';
import { sendGetAllRequest, sendPostRequest, sendDeleteIDRequest } from '../ApiMethods';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import PopUp from '../components/PopUp';


const Storage: React.FC = () => {
    
    /*para los datos de materiales*/
    const [materials, setMaterials] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [nameInput, setNameInput] = useState("Nuevo");
    const [pictoInput, setPictoInput] = useState("https://api.arasaac.org/api/pictograms/29839?resolution=500&download=false");

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

    const handleNameInput = (e: any) => {
        sessionStorage.setItem("name", e.target.value)
        setNameInput(e.target.value)
      };
      const handlePictoInput = (e: any) => {
        sessionStorage.setItem("pictogram", e.target.value)
        setPictoInput(e.target.value)
    };

    const contentMaterial = (
    <IonList class='width-90'>
      <IonItem class='item-list' fill="outline" shape="round" counter={true}>
        <IonIcon slot="start" icon={cafeOutline} />
        <IonInput type="text" placeholder='Nombre del Material' maxlength={20} onIonChange={handleNameInput}></IonInput>
      </IonItem>
      <IonItem fill="outline" shape="round">
        <IonIcon slot="start" icon={addCircleOutline} />
        <IonInput type="text" placeholder='Pictograma' onIonChange={handlePictoInput}></IonInput>
      </IonItem>
    </IonList>
  )

    return (
        <IonPage>
            <Header title="Almacén" back settings={false}/>

            <IonContent fullscreen>
                <IonGrid class="list-container">
                    <SearchBar elements={materials} updateResults={updateResults}></SearchBar>
                    {
                        results.map((material:any) => {
                            return (
                                <ListItem text={material['_name']['_text']} pictogram={material['_name']['_pictogram']} href={"/storage/"+ material['_id']}></ListItem>
                            )
                        })
                    }
                </IonGrid>
                <PopUp label='Añadir Material' title='Nuevo Material' popUpContent={contentMaterial}></PopUp>
            </IonContent>
        </IonPage>
    );

};

export default Storage;