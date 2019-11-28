import { BrowserModule } from '@angular/platform-browser';
import { NgModel,NgForm,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';
import { InsertComponent } from './insert/insert.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    EditComponent,
    InsertComponent,
    DeleteComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    

    
    
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"register",component:RegisterComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},

      {path:"delete/:No",component:DeleteComponent},
      {path:"edit/:No",component:EditComponent},
      {path:"insert",component:InsertComponent},

      {path:"**",component:NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
