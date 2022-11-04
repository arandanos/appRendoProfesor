import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton
  } from '@ionic/react';

import './Header.css'

const Header: React.FC<{ title: string; }> = (props: { title: string }) => {
    return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );

}

export default Header;