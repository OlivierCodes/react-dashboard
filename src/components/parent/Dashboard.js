// Ce composant affiche Dashboard de l'application

import NotificationsWidget from "../enfants/NotificationsWidget";
import StatsWidget from "../enfants/StatsWidgets";
import TasksWidget from "../enfants/TaskWidget";
import style from "./Dashboard.module.css";
export default function Dashboard(){
    return (
        <div className={style.dashboard}>
            <h1>Dashboard</h1>
            <p className={style.subtitle}>Statistiques réelles de l'application</p>
            <div className={style.widgetsContainer}>
                <NotificationsWidget />
                <StatsWidget />
                <TasksWidget />
                
            </div> 
        </div>
    )
}