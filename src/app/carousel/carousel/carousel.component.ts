import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#button-right').click(function() {
      $('.slider').children().addClass('left').removeClass('right').first().appendTo('.slider');
       });

     $('#button-left').click(function() {
        $('.slider').children().addClass('right').removeClass('left').last().prependTo('.slider');
      });
  }
}
