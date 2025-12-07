import { Routes } from '@angular/router';

import { HomePage } from './componentes/barra-lateral/home-page/home-page';
import { Cadernos } from './componentes/barra-lateral/cadernos/cadernos';
import { Calendario } from './componentes/barra-lateral/calendario/calendario';
import { Tarefas } from './componentes/barra-lateral/tarefas/tarefas';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'cadernos', component: Cadernos},
    {path: 'calendario', component: Calendario},
    {path: 'tarefas', component: Tarefas}
];
    