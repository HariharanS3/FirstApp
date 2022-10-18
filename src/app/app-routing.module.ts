import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs';
import { BindingsComponent } from './bindings/bindings.component';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { GreetComponent } from './greet/greet.component';
import { IfComponent } from './if/if.component';
import {LighteningComponent } from './lightening/lightening.component'
import { UseHttpComponent } from './use-http/use-http.component';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import { UseSvc2Component } from './use-svc2/use-svc2.component';
import { Usesvc3Component } from './usesvc3/usesvc3.component';

const routes: Routes = [
  {path:"greet", component:GreetComponent},
  {path:"bindings",component:BindingsComponent},
  {path:"toggle", component:IfComponent},
  {path:"light",component:LighteningComponent},
  {path:"pipes", component:UsePipesComponent},
  {path:"filterword",component:FilterWordComponent},
  {path:'fbService',component:UseSvc2Component},
  {path:'twitterService',component:Usesvc3Component},
  {path:'http',component:UseHttpComponent},
  {path:'http2',component:UseHttpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
