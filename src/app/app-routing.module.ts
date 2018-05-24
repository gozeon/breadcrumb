import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { Breadcrumb } from './breadcrumb/breadcrumb';

const routes: Routes = [
  {
    path: 'forms',
    data: {
      breadcrumb: new Breadcrumb('forms', '/forms')
    },
    children: [
      {
        path: 'details',
        component: LogComponent,
        data: {
          breadcrumb: new Breadcrumb('details', '/forms')
        },
      },
    ]
  },
  {
    path: 'elements',
    component: LogComponent,
    data: {
      breadcrumb: new Breadcrumb('elements', '/elements')
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
