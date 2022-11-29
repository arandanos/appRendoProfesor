/**
 * Componente para el tab switch
 * @param tabsComponents array con los elementos de los tabs
 * @returns content con los tabs y el contenido pasado como argumentos
 */

 import { IonContent, IonLabel, CreateAnimation } from "@ionic/react";
 import React, { useEffect, useState } from "react";
 
 
 interface MaterialListProps{
     tabsComponents: Array<JSX.Element>
 };
 
 const MaterialList: React.FC<MaterialListProps> = (tabsProps: MaterialListProps) => {
     const [tabActive, setTabActive] = useState<number>(0);
     const [content, setContent] = useState<JSX.Element>();
 
     useEffect(() => {
         {/** Aqui cambio el componente */}
         setContent(tabsProps.tabsComponents.at(tabActive));
     }, [tabActive]);
 
 
 
     return(
         <>
             <IonContent fullscreen>
                 <IonLabel>{tabsProps.tabsComponents.at(tabActive)}</IonLabel>
             </IonContent>
         </>
     );
 };
 
 export default MaterialList;