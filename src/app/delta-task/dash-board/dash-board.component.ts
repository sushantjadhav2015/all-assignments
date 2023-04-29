import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DeltaServiceService } from "src/app/services/delta-service.service";

interface ServerResponse {
  status: number;
  message: string;
  data: any[]; // or define a type for your data if possible
}

@Component({
  selector: "app-dash-board",
  templateUrl: "./dash-board.component.html",
  styleUrls: ["./dash-board.component.css"],
})
export class DashBoardComponent implements OnInit {
  userArray: any[];
  currentItem: any;

  constructor(
    private deltaService: DeltaServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.allUserData();
  }

  allUserData() {
    this.deltaService.getUsers().subscribe((res: ServerResponse) => {
      this.userArray = res.data;
    });
  }

  // this logic used to edit data in inline tabling
  onEdit(item: any) {
    // debugger;
    this.userArray.forEach((element) => {
      element.isEdit = false;
      this.currentItem = item;
    });
    item.isEdit = true;
  }

  deleteData(id: string) {
    console.log(id);

    const url = `https://devrunner.co.in/machine_test/index.php/web_api/Users/remove_user/${id}`;

    var result = confirm("want to delete");
    if (id && result) {
      const user = this.userArray.map((x) => x.id === id);

      if (!user) return;

      this.http.delete(url).subscribe(() => {
        alert("remove successfully");
        this.allUserData();
      });
    }
  }

  updateData(user: any) {
    const updateData = {
      user_id:user.user_id,
      user_name: user.user_name,
      user_email: user.user_email,
      user_phone_no: user.user_phone_no,
      user_pwd: user.user_pwd,
      user_gender: user.user_gender,
    };

    console.log(updateData);
    
    this.http
      .put(`https://devrunner.co.in/machine_test/index.php/web_api/Users/update_user`, updateData)
      .subscribe(
        (response) => {
          console.log("Data Updated", response);
          user.isEdit = false;
        },
        (error) => {
          console.log(`Error occurse`, error);
        }
      );
  }
}
