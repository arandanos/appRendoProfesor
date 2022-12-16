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
import MaterialTaskView from './pages/MaterialTaskView';
import MyClasses from './pages/MyClasses';
import Profile from './pages/Profile';
import AdminSettings from './pages/AdminSettings';
import Storage from './pages/Storage';
import DishTypes from './pages/DishTypes';


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
import StudentManagement from './pages/StudentManagement';
import UsersManagement from './pages/UsersManagement';
import NewAdmin from './pages/NewAdmin';
import TeachersManagement from './pages/TeachersManagement';
import ClassroomsManagement from './pages/ClassroomsManagement';
import NewKitchenOrder from './pages/NewKitchenOrder';
import NewMaterialTask from './pages/NewMaterialTask';
import NewPrinterTask from './pages/NewPrinterTask';
import NewLaminatorTask from './pages/NewLaminatorTask';
import StorageAvailability from './pages/StorageAvailability';
import NewTeacher from './pages/NewTeacher';
import NewStudent from './pages/NewStudent';

import SuperviseKitchenOrder from './pages/SuperviseKitchenOrder';

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
          <Route exact path="/material">
            <NewMaterialTask />
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
            <Route path="/dish_types" component={DishTypes}/>            
            <Route path="/users" component={UsersManagement}/>
            <Route path="/new/admin" component={NewAdmin}/>           
            <Route path="/classrooms" component={ClassroomsManagement}/>
            <Route path="/new/teacher" component={NewTeacher}/>
            <Route path="/new/student" component={NewStudent}/>
            <Route exact path="/storage" component={Storage}/>
            <Route path="/storage/:id_material" component={StorageAvailability}/>

            {/* TAREAS */}
            <Route path="/kitchen_order/:id_task" component={KitchenOrderView}/>
            {/* <Route exact path="/my_classes/:id_task" component={MyClasses}/> */}
            <Route exact path="/material_task_view/:id_task" component={MaterialTaskView}></Route>

            {/* Rutas Crear Tarea */}
            <Route path="/task/new/kitchen_order" component={NewKitchenOrder}/>
            <Route path="/task/new/material_request" component={NewMaterialTask}/>
            <Route path="/task/new/printer_task" component={NewPrinterTask}/>
            <Route path="/task/new/laminator_task" component={NewLaminatorTask}/>
            {/* <Route path="/task/new/steps_task" component={}/> */}

            {/* COMANDA CLASE */}
            <Route path={"/supervise_kitchen_order/:class_name"}>
              <SuperviseKitchenOrder/>
            </Route>

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
