import Header from '../components/Header';
import { IonContent} from '@ionic/react';
import './LaminatorTask.css'
import PrinterLaminator from '../components/PrinterLaminator';
import { useState } from 'react';



const LaminatorTask: React.FC = () => {



  return (
    <>
      <Header title="Plastificadora" back settings={false}/>
      <IonContent fullscreen>
        <PrinterLaminator printer={false}/>              
      </IonContent>

    </>
  );
};

export default LaminatorTask;