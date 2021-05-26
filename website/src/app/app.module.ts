
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnersComponent } from './components/partners/partners.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { ProjectsAdminComponent } from './admin/projects-admin/projects-admin.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AddImgComponent } from './admin/add-img/add-img.component';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import {SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SingleProductComponent } from './components/products/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PartnersComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    ProjectsAdminComponent,
    AddProjectComponent,
    AddImgComponent,
    CompanyProfileComponent,
    AddProductComponent,
    NavAdminComponent,
    ProductAdminComponent,
    ProductDetailsComponent,
    PageHeaderComponent,
    SingleProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule,
    SlickCarouselModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
