import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Job } from '../../models/job';
import { Observable } from 'rxjs';

// import jobs from '../../../../../jobs.json';
// https://jsonworld.com/demo/how-to-read-local-json-file-in-angular
// https://www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/
// https://mariusschulz.com/blog/importing-json-modules-in-typescript
// https://ultimatecourses.com/blog/typing-arrays-typescript
// https://medium.com/@balramchavan/deploy-angular-application-in-nginx-server-on-digitalocean-ubuntu-droplet-28380524811e
// https://stackoverflow.com/questions/45199485/how-to-download-node-modules-to-angular-2-project
// https://medium.com/@hmurari/serving-angular-app-from-behind-a-nginx-web-server-3579df0b04b1
// https://medium.com/dailyjs/cloud-powered-apps-with-angular-firebase-part-i-ff3f9aa96565
// https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  //jobList: Job[] = jobs;
  jobList: Observable<Job[]>;

  constructor(firestore: AngularFirestore) { 
    this.jobList = firestore.collection('jobs').valueChanges();
  }

  ngOnInit(): void {
  }

}
