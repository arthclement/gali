import { Component, OnInit } from '@angular/core';

//jquery import
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
// jquery lines    
    $(document).ready(function(){

      console.log("ok");
      $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      
        for (var i = 0; i < 2; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
      
          next.children(':first-child').clone().appendTo($(this));
        }
      });
    });
  }

}
