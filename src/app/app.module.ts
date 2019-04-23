import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Firebase} from 'src/app/firebase/firebase';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { SensoresComponent } from './sensores/sensores.component';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    SeleccionComponent,
    SensoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Firebase.firebase),
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
