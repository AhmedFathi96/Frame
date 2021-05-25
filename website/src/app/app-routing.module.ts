import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ProjectsAdminComponent } from './admin/projects-admin/projects-admin.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { AddImgComponent } from './admin/add-img/add-img.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { CurtainwallsComponent } from './components/curtainwalls/curtainwalls.component';
import { DoorswindowsComponent } from './components/doorswindows/doorswindows.component';
import { CladdingComponent } from './components/cladding/cladding.component';
import { LouverComponent } from './components/louver/louver.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  },
  {
    path:"projects/:id",
    component:ProjectsComponent
  },
  {
    path:"product/:id",
    component:ProductDetailsComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
  path:"login",
  component:LoginComponent
  },
  {
    path:"projectsAdmin",
    component:ProjectsAdminComponent
  },
  {
    path:"productAdmin",
    component:ProductAdminComponent
  },
  {
    path:"addProject",
    component:AddProjectComponent
  },
  {
    path:"addImg",
    component:AddImgComponent
  },{
    path:"profile",
    component:CompanyProfileComponent
  },
  {
  path:"addProduct",
  component:AddProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
