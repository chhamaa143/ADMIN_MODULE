import { Component, OnInit } from '@angular/core';
import { EmiService } from '../services/emi.service';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  constructor(private emiService: EmiService) { }

  emis:any=[];
  ngOnInit(): void {
    this.emiService.viewEmis().subscribe(data=>{
      this.emis=data;
    });
  }

  payEmi(id:any){
    this.emiService.payEmi(id).subscribe(data=>{
      window.alert("emi payed..");
      this.ngOnInit();
    });
  }

}
