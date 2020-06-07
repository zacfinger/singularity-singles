import { Component, OnInit } from '@angular/core';
import { Job } from '../job'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  job: Job = {
    title: "Data Courier",
    href: "https://www.dnb.com/business-directory/company-profiles.pharmakom_llc.30182b6eefd071fb35f8f25c4f2153da.html",
    company: "Pharmakom"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
