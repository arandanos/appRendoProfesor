import { IonContent, IonGrid, IonItem, IonLabel, IonList, IonSearchbar, SearchbarChangeEventDetail } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './MaterialInventory.css'
import '../ApiMethods'
import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import { sendGetAllRequest } from '../ApiMethods';


const MaterialInventory: React.FC = () => {
    
    /*para los datos de materiales*/
    const [materials, setMaterials] = useState([]);
  
    
    useEffect(()=>{

        sendGetAllRequest("material").then(data => {
            setMaterials(data)
        })
    },[])


    let [prueba, setPrueba] = useState(Array<any>)
    var arrayAuxiliarNombres: Array<string> = [];


    function findMaterials(materials: any[]) {
        var tipos: any[] = []
        var materialesFiltrados : any[] = []
        materials.map( material =>{
            var tipo = material['_type']['_id']
            if (tipos.find(element => element == tipo) == undefined){
                tipos.push(tipo)
                materialesFiltrados.push(material)
                arrayAuxiliarNombres.push(String(material['_type']['_item']['_text']))
            }
        }
        )
        return materialesFiltrados
    }

    var materialesF = findMaterials(materials) 
    
    
    function searchBarMaterials(materials: any[], arrayAuxiliarNombres: any[]) {
        var arrayElementosBarraBuscadora: Array<JSX.Element> = [];
        materials.map( material =>{
            if(arrayAuxiliarNombres.find(nombre => nombre == material['_type']['_item']['_text'])!=undefined){
                arrayElementosBarraBuscadora.push(material)
            }    
        }
        )
        console.log(arrayElementosBarraBuscadora)
        return arrayElementosBarraBuscadora
    }    


    const handleChange = (ev: Event) => {
        let query = "";
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
        arrayAuxiliarNombres = arrayAuxiliarNombres.filter(d => d.toLowerCase().indexOf(query) > -1)
        setPrueba(searchBarMaterials(materialesF, arrayAuxiliarNombres))
    }
  

    return (
        <>
            <Header title="Almacén" back settings={false}  />

            <IonContent fullscreen>
                <IonSearchbar showClearButton="focus" placeholder="Buscar material..." debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
                
                <IonGrid class="list-container-materials">
                    {
                        prueba.map(material => {
                            return (
                                <ListItem text={material['_type']['_item']['_text']} pictogram={material['_type']['_item']['_pictogram']} href={"/MaterialInventoryDisponibility/"+ material['_type']['_id']}></ListItem>
                            )
                            })
                    }
                </IonGrid>

            </IonContent>
        </>
    );

};

export default MaterialInventory;