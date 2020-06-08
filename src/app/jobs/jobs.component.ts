import { Component, OnInit } from '@angular/core';
import { Job } from '../job';

import jobs from '../../../../jobs.json';
// https://jsonworld.com/demo/how-to-read-local-json-file-in-angular
// https://www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobList: Job[] = jobs;

  constructor() { }

  ngOnInit(): void {
  }

}
