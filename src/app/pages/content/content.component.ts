import { Component, NgModule, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
      
  }

}
