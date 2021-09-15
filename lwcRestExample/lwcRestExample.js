import { LightningElement } from 'lwc';

export default class LwcRestExample extends LightningElement {

    responseData;
    
    connectedCallback() {
        fetch('https://gorest.co.in/public/v1/posts' , {
            method : 'GET'
        }).then(response => {
            console.log("then 1 execute");
            return response.json();
        }).then(jsonResponse => {
            console.log("then 2 execute");
            var posts = JSON.parse(JSON.stringify(jsonResponse));
            this.responseData = posts.data;
            console.log(this.responseData);
        }).catch(result => {
            console.log("catch is execute");
        })
    }

}