import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './if/if.component';
import { LighteningComponent } from './lightening/lightening.component';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import { ReversePipe } from './reverse.pipe';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { BlacklistPipe } from './blacklist.pipe';
import { SearchPipe } from './search.pipe';
import { UseSvc2Component } from './use-svc2/use-svc2.component';
import { Usesvc3Component } from './usesvc3/usesvc3.component';
import { UseHttpComponent } from './use-http/use-http.component';
import {HttpClientModule} from '@angular/common/http';
import { UseHttp2Component } from './use-http2/use-http2.component';
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    BindingsComponent,
    IfComponent,
    LighteningComponent,
    UsePipesComponent,
    ReversePipe,
    FilterWordComponent,
    BlacklistPipe,
    SearchPipe,
    UseSvc2Component,
    Usesvc3Component,
    UseHttpComponent,
    UseHttp2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
