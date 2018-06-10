import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fileToUpload: File = null;
  databaseKD : String = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    var reader = new FileReader();
    reader.readAsText(this.fileToUpload);
    var me = this;
    reader.onload = function () {
      me.databaseKD = reader.result;
    }
    console.log(this.databaseKD);
  }
}
