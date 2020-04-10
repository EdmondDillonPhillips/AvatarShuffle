import { Component, OnInit, Input } from '@angular/core';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../avatar.model';

@Component({
  selector: 'app-avatar-tile',
  templateUrl: './avatar-tile.component.html',
  styleUrls: ['./avatar-tile.component.css']
})

export class AvatarTileComponent implements OnInit {

  @Input() avatar: Avatar;
  @Input() backgroundColor: string;

  constructor(private avatarService: AvatarService) { }

  ngOnInit(): void {
  }
   
}