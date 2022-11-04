import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, clipboardOutline, addCircleOutline, briefcaseOutline, personOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Create_task from './pages/Create_task';
import My_classes from './pages/My_classes';
import Profile from './pages/Profile';
import Admin_settings from './pages/Admin_settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route path="/create_task">
            <Create_task />
          </Route>
          <Route path="/my_classes">
            <My_classes />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/admin_settings">
            <Admin_settings />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tareas" href="/tasks">
            <IonIcon icon={clipboardOutline} />
            <IonLabel>Tareas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Create_task" href="/create_task">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Tarea</IonLabel>
          </IonTabButton>
          <IonTabButton tab="My_classes" href="/my_classes">
            <IonIcon icon={briefcaseOutline} />
            <IonLabel>Clases</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
