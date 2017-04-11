import { Component, OnInit, Input} from '@angular/core';
import { Player } from '../player.model';
import { PlayerService} from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() currentPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  deletePlayerButton(player) {
      let num1 = Math.floor((Math.random() * 10 + 1));
      let num2 = Math.floor((Math.random() * 10 + 1));
      let ans = num1 + num2;
      let userAnswer = parseInt(prompt('To Delete enter the answer to: ' + num1 + '+' + num2, ''));
      if (userAnswer === ans) {
          this.playerService.deletePlayer(player);
      } else {
          alert('Incorrect Answer');
      }
  }

}
