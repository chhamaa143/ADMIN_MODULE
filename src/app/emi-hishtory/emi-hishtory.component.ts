import { Component, OnInit } from '@angular/core';
import { EmiService } from '../services/emi.service';
@Component({
  selector: 'app-emi-hishtory',
  templateUrl: './emi-hishtory.component.html',
  styleUrls: ['./emi-hishtory.component.css']
})
export class EmiHishtoryComponent implements OnInit {

  constructor(private emiService: EmiService) { }

  emis:any=[];
  ngOnInit(): void {
    this.emiService.viewEmisHistory().subscribe(data=>{
      this.emis=data;
    });
  }
}
