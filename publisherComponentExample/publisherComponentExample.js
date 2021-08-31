import { LightningElement, wire } from 'lwc';
import { fireEvent, registerListener } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class PublisherComponentExample extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    userDetail = {};

    connectedCallback() {
        registerListener("sendUserDetail",this.handleUserDetail,this);
    }

    handleSendMessage() {
        fireEvent(this.pageRef,"sendMessage","Hello message received from publisher component");
    }

    handleSendUserDetail() {

        var userDetail = {
            id : 1001,
            name : 'Ankit Sharma',
            salary : 5000,
            city : 'Jaipur'
        };

        fireEvent(this.pageRef,"sendUserDetail",userDetail);
    }

    handleUserDetail(data) {
        this.userDetail = {
            id : data.id,
            name : data.name,
            city : data.city,
            salary : data.salary
        }
    }
}