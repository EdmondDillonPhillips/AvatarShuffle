import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../avatar.model';

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.css']
})
export class TileGridComponent implements OnInit {

  avatarArr: string[] = new Array();
  backgroundColor: string = "black";
  colorsArr: string[] = new Array('red', 'blue', 'green', 'yellow', 'orange');
  

  constructor(private avatarService: AvatarService) { }

  ngOnInit(): void {

    for(let i=0; i<9; i++){
      this.populateAvatars();
      this.generateRandomColor();
    };

  }

  populateAvatars(){

      this.avatarService.getAvatar().subscribe((res)=>{

      let response: any = res;
      let avatarImage: string = response.sprites.front_default;

      this.avatarArr.push(avatarImage);

      });

  }

  generateRandomColor(){

    let randomNumber = Math.round(Math.random()*4);

    return this.colorsArr[randomNumber];

  }

}
