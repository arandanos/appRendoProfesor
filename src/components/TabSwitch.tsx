/**
 * Componente para el tab switch
 * @param tabsNames array con los nombres
 * @param tabsComponents array con los elementos de los tabs
 * @returns content con los tabs y el contenido pasado como argumentos
 */

import { IonContent, IonLabel, IonSegment, IonSegmentButton, CreateAnimation, Animation } from "@ionic/react";
import React, { useEffect, useState } from "react";


interface TabSwitchProps{
    tabsNames: Array<string>,
    tabsComponents: Array<JSX.Element>
};

const TabSwitch: React.FC<TabSwitchProps> = (tabsProps: TabSwitchProps) => {
    const [tabActive, setTabActive] = useState<number>(0);
    const [content, setContent] = useState<JSX.Element>();

    useEffect(() => {
        {/** Aqui cambio el componente */}
        setContent(tabsProps.tabsComponents.at(tabActive));
    }, [tabActive]);

    const handleClick = (e: any) => {
        const index = parseInt(e.target.id, 0);
        if (index !== tabActive){
            setTabActive(index);
        }
    };


    <CreateAnimation duration={1000}
        fromTo={[
            {property:'transform', fromValue:'translate(0px)', toValue:'translateX(-100px)'}
        ]}
    ></CreateAnimation>

    return(
        <>
            <IonContent fullscreen>
                <IonSegment>
                    {tabsProps.tabsNames.map(tab => {
                        return(
                            <IonSegmentButton value={tab}  onClick={handleClick} id={String(tabsProps.tabsNames.indexOf(tab))}>
                                <IonLabel class="btn-title">{tab}</IonLabel>
                            </IonSegmentButton>
                        );
                    })}                  
                </IonSegment>
                <IonLabel>{tabsProps.tabsComponents.at(tabActive)}</IonLabel>
            </IonContent>
        </>
    );
};

export default TabSwitch;