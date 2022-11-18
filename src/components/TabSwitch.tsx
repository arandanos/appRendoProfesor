/**
 * Componente para el tab switch
 * @param tabs nombres de los 2 tabs
 * @returns 
 */

import { IonContent, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { useState } from "react";

const [tabActive, setTabActive] = useState<number>(0);

interface TabSwitchProps{
    tabsNames: Array<string>,
    tabsComponents: Array<JSX.Element>
};

const TabSwitch: React.FC<TabSwitchProps> = (tabsProps: TabSwitchProps) => {
    return(
        <>
            <IonContent fullscreen>
                <IonSegment>
                    {tabsProps.tabsNames.map(tab => {
                        return(
                            <IonSegmentButton value={tab} onClick={() => {
                                setTabActive(tabsProps.tabsNames.indexOf(tab));
                            }}>
                                <IonLabel class="btn-title">{tab}</IonLabel>
                            </IonSegmentButton>
                        );
                    })}                    
                </IonSegment>

                {tabActive ? (
                    <>
                    </>
                ) : (
                   <>
                   </> 
                )};

            </IonContent>
        </>
    );
};

export default TabSwitch;