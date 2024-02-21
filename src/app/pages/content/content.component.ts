import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})


export class ContentComponent implements OnInit {

  photoCover:string = "https://cordierinvestimentos.com.br/wp-content/uploads/2020/09/placeholder-300x200.png"
  contentTitle:string = "LOREM"
  contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  

  constructor(private route:ActivatedRoute) {  }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        console.log(value.get("id"))        
      )
  }

}
