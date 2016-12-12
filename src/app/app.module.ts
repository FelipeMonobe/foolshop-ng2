import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { LoginService } from './login/login.service'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AboutComponent } from './about/about.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { ContactComponent } from './contact/contact.component'
import { AuthPanelComponent } from './auth-panel/auth-panel.component'
import { CategoriesComponent } from './categories/categories.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { CapitalizePipe } from './shared/capitalize.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AuthPanelComponent,
    NavbarComponent,
    CategoriesComponent,
    ContactComponent,
    AboutComponent,
    ProductCardComponent,
    CategoryCardComponent,
    InfoCardComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
