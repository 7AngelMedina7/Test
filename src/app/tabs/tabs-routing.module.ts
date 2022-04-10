import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
          path: 'inicio',
          loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
        },
        {
          path: 'comidas',
          loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
        },
        {
          path: 'carrito',
          loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}