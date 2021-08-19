import { api, LightningElement } from 'lwc';

export default class PublicPropertyExample extends LightningElement {

    @api recordId;
    @api objectApiName;

}