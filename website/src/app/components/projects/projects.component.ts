import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[]=[]
  productsNames:string[] = [];
  constructor(private projectsService:ProjectsService,private route:ActivatedRoute) { }
  getProjects(){
    this.projectsService.getProjects().subscribe((res:any)=>{
      this.projects = res;
      res.forEach( (proj:any,index:number) =>{
        this.projectsService.getProduct(proj.product).subscribe(re =>{
          this.productsNames.push(re.title === undefined ? '':re.title);
          this.projects[index].productName = re.title;
        })
      })
    })
  }
  products:Product[]=[]
  getProducts(){
    this.projectsService.getProducts().subscribe((res:any)=>{
      this.products = res
    })
  }

  id = this.route.snapshot.paramMap.get('id')


  ngOnInit(): void {
    this.getProjects()
    this.getProducts()
    //this.router.navigate(['/projects#'+this.id])
    console.log(this.id)

  }

}
