import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Firebase} from 'src/app/firebase/firebase';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensoresComponent } from './sensores/sensores.component';
import { FormCreateComponent } from './form-create/form-create.component';


@NgModule({
  declarations: [
    AppComponent,
    SensoresComponent,
    FormCreateComponent
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
