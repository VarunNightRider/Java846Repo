import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppComponent } from "../app.component";
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName='';
  newServerContent='';
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddserver(nameInput:HTMLInputElement){
    // console.log(nameInput);
    
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServerContent
    });
    
 
  }
  onAddBlueprint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServerContent
    });
  }

}
