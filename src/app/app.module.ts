import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Firebase} from 'src/app/firebase/firebase';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SeleccionComponent } from './seleccion/seleccion.component';
=======
import { SensoresComponent } from './sensores/sensores.component';

>>>>>>> 26f6782c6517de0495a7d3676445ec0652e23863

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SeleccionComponent
=======
    SensoresComponent
>>>>>>> 26f6782c6517de0495a7d3676445ec0652e23863
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Firebase.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
