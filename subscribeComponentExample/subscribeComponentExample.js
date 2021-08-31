import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SubscribeComponentExample extends LightningElement {
    
    @wire(CurrentPageReference) pageRef;

    publisherMessage;
    userDetail = {};

    connectedCallback() {
        registerListener("sendMessage",this.handleSendMessage,this);        
    }

    handleSendMessage(message) {
        console.log(message);
        this.publisherMessage = message;
    }

    handleUserDetail(data) {
        console.log(data);
        this.userDetail = {
            id : data.id,
            name : data.name,
            salary : data.salary,
            city : data.city
        }
    }

    handleSubscribe() {
        registerListener("sendUserDetail",this.handleUserDetail,this);
    }

    HanldeUpdate() {

        var data = this.template.querySelectorAll(".forInput");

        var userDetail = {
            id : data[0].value,
            name : data[1].value,
            salary : data[2].value,
            city : data[3].value
        }

        fireEvent(this.pageRef,"sendUserDetail",userDetail);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }
}