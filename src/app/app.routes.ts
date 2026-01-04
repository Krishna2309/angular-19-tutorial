import { Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalsComponent } from './linked-signals/linked-signals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { CRUDComponent } from './crud/crud.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { ReusableComponent } from './reusable/reusable.component';
import { ParentComponent } from './parent/parent.component';
import { StorageComponent } from './storage/storage.component';

export const routes: Routes = [
  // 1st way to define default route
  //   {
  //     path: '',
  //     component: AttributeDirectivesComponent,
  //   },
  //2nd way to define default route
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'attribute-directives',
    component: AttributeDirectivesComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: 'linked-signals',
    component: LinkedSignalsComponent,
  },
  {
    path: 'built-in-pipes',
    component: BuiltInPipesComponent,
  },
  {
    path: 'tdf',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'rf',
    component: ReactiveFormComponent,
  },
  {
    path: 'crud',
    component: CRUDComponent,
  },
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'updateuser/:id',
    component: UpdateUserComponent,
  },
  {
    path: 'viewuser/:id',
    component: ViewUserComponent,
  },
  {
    path: 'resourceapi',
    component: ResourceApiComponent,
  },
  {
    path: 'reusable',
    component: ReusableComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'storage',
    component: StorageComponent,
  },
  //wild card route which does not exist must be the last route
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
