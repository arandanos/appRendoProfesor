import Header from '../components/Header';
import { IonContent} from '@ionic/react';
import './PrinterTask.css'
import { useState } from 'react';

import PrinterLaminator from '../components/PrinterLaminator';




const PrinterTask: React.FC = () => {
  return (
    <>
      <Header title="Impresora" back settings={false}/>

      <IonContent fullscreen>
        <PrinterLaminator printer={true}/> 
      </IonContent>

    </>
  );
};

export default PrinterTask;