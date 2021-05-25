import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isTopPage:boolean = true;
  openMenu:boolean = true;
  @ViewChild('menu')
  menu!: ElementRef;
  constructor(private renderer: Renderer2,private projectsService:ProjectsService) {
    this.renderer.listen('window', 'click',(e:Event)=>{

      if(e.target!==this.menu.nativeElement){
          this.openMenu=true;
      }
    });
  }
  products:Product[]=[]
  getProducts(){
    this.projectsService.getProducts().subscribe((res)=>{
      this.products = res
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }
  @HostListener("window:scroll", [])onWindowScroll() {
    this.isTopPage = document.documentElement.scrollTop > 50 ? false:true;
  }

}
