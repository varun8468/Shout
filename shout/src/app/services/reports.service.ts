import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private addReportUrl = "http://localhost:8000/api/reports";
  constructor(private httpClient:HttpClient) { }

  addReport(data:any){
    return this.httpClient.post(this.addReportUrl, data);
  }
}


