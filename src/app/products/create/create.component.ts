import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { ScategoriesService } from '../../scategories/scategories.service'
import { Scategories } from '../../scategories/scategories'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('myModal') myModal!: ElementRef;

  display = "none";

  products:Products=new Products()
  scategories!:Scategories[] ;

  constructor(private prodserv:ProductsService,private scatserv:ScategoriesService){}
  ngOnInit(){
   this.loadscategorie()
  }

  loadscategorie(){
    return this.scatserv.getAll().subscribe(data=>
      this.scategories=data),
      (error:any)=>console.log(error)
  }
 
  ajoutarticle=()=>{
     this.prodserv.create(this.products).subscribe((data=>{
      console.log(data)
      this.closeModal() 
      window.location.reload();
  }))
    
  }
  

  openModal() { 
       this.display = "block";
  }
 
  closeModal() {
    this.display = "none";
  }
}
