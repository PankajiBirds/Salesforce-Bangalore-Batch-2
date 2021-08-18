import { LightningElement } from 'lwc';

export default class InputAndButtonExample extends LightningElement {

    userDetail = {};

    handleClickMe() {
        alert("Hello Alert");
    }    

    handleSubmitButton() {
        var name = this.template.querySelector(".name").value;       
        var data = this.template.querySelectorAll(".forInput");
        console.log("@@ "+name);
        
        this.userDetail = {
            name : name,
            salary : data[0].value,
            email : data[1].value,
            password : data[2].value,
            dob : data[3].value
        };

        for(var i = 0; i < data.length; i++) {
            console.log("## "+data[i].value);
        }
        console.log("## "+data);
        console.log("!! "+data.length);
    }
}