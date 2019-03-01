import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

// declare var $: any;
declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'fractal-image',
  templateUrl: './fractal-image.component.html',
  styleUrls: ['./fractal-image.component.css']
})
export class FractalImageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    this.setParmeter();
  }
  image:any;
  /**
   * setting the basic parameter of the image
   */
  json={
    "x":0,
    "y":0,
    "pix_x":0.00825,
    "pix_y":0.00825,
    "width":720,
    "height":720,
    "max_depth":1225,
    "renderer":"cpp"
  }
  /**
   * sets the parameter to the image src
   */
  setParmeter(){
    var json=JSON.stringify(this.json);
    var img_url="http://fractalvalley.net/img?json="+json;
    console.log(img_url)
    $(".image").attr("src",img_url);
  }

}
