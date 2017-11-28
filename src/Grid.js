import React, { Component } from 'react';
import './Grid.css'
import img1 from './dist/grid_image_1.png';
import img2 from './dist/grid_image_2.png';
import img3 from './dist/grid_image_3.png';
import img4 from './dist/grid_image_4.png';
import img5 from './dist/grid_image_5.png';
import img6 from './dist/grid_image_6.png';


class Grid extends Component {
  constructor(){
    super();
    this.state = {
      objectArray:[
        {image: img1, date: "2017-02-10", title: "Bureaux exquisite delightful carefully currated soft power"},
        {image: img2, date: "2017-02-02", title: "Sharp bureaux sleepy K-pop carefully currated"},
        {image: img3, date: "2017-01-27", title: "St Moritz uniforms Beams"},
        {image: img4, date: "2017-01-21", title: "Esse airport veniam ryokan soft power"},
        {image: img5, date: "2017-01-18", title: "K-pop extraordinary"},
        {image: img6, date: "2017-01-27", title: "Artisanal iconic cutting-edge business class"},
      ]
    };
  }

  convertToDate(inputDate){
    var parsedArray = inputDate.split("-");
    var month = "";
    switch(parseInt(parsedArray[1])) {
      case 1:
          month = "January";
          break;
      case 2:
          month = "February";
          break;
      case 3:
          month = "March";
          break;
      case 4:
          month = "April";
          break;
      case 5:
          month = "May";
          break;
      case 6:
          month = "June";
          break;
      case 7:
          month = "July";
          break;
      case 8:
          month = "August";
          break;
      case 9:
          month = "September";
          break;
      case 10:
          month = "October";
          break;
      case 11:
          month = "November";
          break;
      case 12:
          month = "December";
          break;
      default:
          month = "January";
    }
    return month+" "+parsedArray[2]+" "+parsedArray[0];
  }

  renderGridBlock(i){
    return(
      <div>
        <img id="brick-img" src={this.state.objectArray[i].image} className="grid-image" alt="image" />
        <span id="date">{this.convertToDate(this.state.objectArray[i].date)}<br/></span>
        <span id="title">{this.state.objectArray[i].title}<br/></span>
        <span id="tagline">Powered by LOREM IPSUM</span>
      </div>
    );
  }

  render(){
    return (
      <div className="masonry">
        <div className="brick">
          {this.renderGridBlock(0)}
        </div>
        <div className="brick">
          {this.renderGridBlock(1)}
        </div>
        <div className="brick">
          {this.renderGridBlock(2)}
        </div>
        <div className="brick">
          {this.renderGridBlock(3)}
        </div>
        <div className="brick">
          {this.renderGridBlock(4)}
        </div>
        <div className="brick">
          {this.renderGridBlock(5)}
        </div>
      </div>
    );
  }
}
export default Grid;
