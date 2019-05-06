import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Component({
  selector: 'app-triggerbotton',
  templateUrl: './triggerbotton.component.html',
  styleUrls: ['./triggerbotton.component.scss']
})
export class TriggerbottonComponent implements OnInit {
  public waitRes: Boolean;
  public messageErrorPopup: Boolean;
  public messageSavePopup: Boolean;

  public on_off_botton: Boolean;
  public on_off: Boolean = false;
  public server : string;
  public values: string[] = [];
  public values2: string[] = [];
  
  constructor(private httpClient: HttpClient) {
    this.server = 'http://localhost:8000/fullscreem/';
    this.waitRes = false;
    this.messageErrorPopup = false;
    this.messageSavePopup = false;
  }

  ngOnInit() {
  }

  onClickBotton(event : any){
    if (this.on_off){
      this.on_off = false;
    }else{
      this.on_off = true;
    }

    this.waitRes = true;
    this.messageErrorPopup = false;

    let statusButton = { "status_button": this.on_off};

    this.newData(statusButton)
        .then((res)=> {
          console.log("ok");
          this.waitRes = false;
          this.messageSavePopup = true;

        }).catch( err =>{
          console.log(err);
          this.messageSavePopup = false;
          this.waitRes = false;
          this.messageErrorPopup = true;
      });

    console.log(this.on_off_botton)
    return;
  }

  newData(statusButton){
    let headers = {
      'Content-Type':  'application/json'
    }

    return new Promise((resolve, reject)=>{
      let headers = {
        //'Access-Control-Allow-Origin': 'http://localhost',
        //'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        //'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        //'Access-Control-Allow-Credentials': "true" 
      };

      this.httpClient.post(this.server, statusButton, {headers: headers, responseType: 'text'}).subscribe(
        res => resolve(res),
        err => reject(err)
      );
    })
  }

}
