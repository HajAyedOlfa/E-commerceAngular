import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//l'importation des nouveau component se fait automatique l'ors de leurs création
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component'; 

import { RouteModule } from './route/route.module'; // importation faite automatiquement
import { RouterModule } from '@angular/router'; // importation faite automatiquement

//on fait l'importation des Angular material de cette maniére :
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { StoreInfoService } from './store-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule, // on doit faire l'import de RouteModule 
    RouterModule, // // on doit faire l'import de RouterModule

    // on fait l'import de angular material
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule
    
  ],
  providers: [StoreInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
