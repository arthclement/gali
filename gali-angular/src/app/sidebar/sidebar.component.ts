import { Component, OnInit } from '@angular/core';
//jquery import
import * as $ from 'jquery';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
 
})
export class SidebarComponent implements OnInit {


  constructor() { }

  public ngOnInit() {
    $(document).ready(function(){
        console.log("ok");
        $("#sidebar .toggle-btn span").on("click", function(event){
          event.preventDefault()
          console.log("ok");
          $("#sidebar").addClass("active");
          $("#sidebar .toggle-btn span").css("display","none");
          
          
        })
        
    
    });
  }

}
