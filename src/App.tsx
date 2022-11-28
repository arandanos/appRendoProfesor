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
import CreateTask from './pages/CreateTask';
import MyClasses from './pages/MyClasses';
import Profile from './pages/Profile';
import AdminSettings from './pages/AdminSettings';

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
import KitchenOrderView from './pages/KitchenOrderView';
import MenusDesserts from './pages/MenusDesserts';
import StudentManagement from './pages/StudentManagement';
import TeachersManagement from './pages/TeachersManagement';
import ClassroomsManagement from './pages/ClassroomsManagement';
import Materials from './pages/Materials';
import KitchenOrderTask from './pages/KitchenOrderTask';
import MaterialTask from './pages/MaterialTask';
import PrinterTask from './pages/PrinterTask';
import LaminatorTask from './pages/LaminatorTask';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* RUTAS PARA LAS TABS */}
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route exact path="/create_task">
            <CreateTask />
          </Route>
          <Route exact path="/my_classes">
            <MyClasses />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

          {/* RUTAS RESTO DE COMPONENTES */}

          <Route exact path="/admin_settings" component={AdminSettings}/>
            <Route path="/dish_types" component={MenusDesserts}/>
            <Route path="/students" component={StudentManagement}/>
            <Route path="/teachers" component={TeachersManagement}/>
            <Route path="/classrooms" component={ClassroomsManagement}/>
            <Route path="/storage" component={Materials}/>

            {/* TAREAS */}
            <Route exact path="/kitchen_order" component={KitchenOrderView}/>

            {/* Rutas Crear Tarea */}
            <Route path="/task/new/kitchen_order" component={KitchenOrderTask}/>
            <Route path="/task/new/material_request" component={MaterialTask}/>
            <Route path="/task/new/printer_task" component={PrinterTask}/>
            <Route path="/task/new/laminator_task" component={LaminatorTask}/>
            {/* <Route path="/task/new/steps_task" component={}/> */}

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

        </IonRouterOutlet>

        {/* TABS */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel class='hide'>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Tasks" href="/tasks">
            <IonIcon icon={clipboardOutline} />
            <IonLabel class='hide'>Tareas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="CreateTask" href="/create_task">
            <IonIcon icon={addCircleOutline} />
            <IonLabel class='hide'>Tarea</IonLabel>
          </IonTabButton>
          <IonTabButton tab="MyClasses" href="/my_classes">
            <IonIcon icon={briefcaseOutline} />
            <IonLabel class='hide'>Clases</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon icon={personOutline} />
            <IonLabel class='hide'>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
