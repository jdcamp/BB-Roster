import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { ManagerComponent } from './manager/manager.component';
import { PlayerPageComponent } from './player-page/player-page.component';


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: IndexComponent
},
  {
    path: 'manager',
    component: ManagerComponent
},
{
    path: 'player/:id',
    component: PlayerPageComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
