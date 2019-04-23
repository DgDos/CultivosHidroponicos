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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

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
    MatCheckboxModule,
    MatGridListModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
