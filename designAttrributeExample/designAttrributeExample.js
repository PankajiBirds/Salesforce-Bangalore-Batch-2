import { LightningElement, api } from 'lwc';

export default class DesignAttrributeExample extends LightningElement {
    @api
    title;
    @api
    name;
    @api
    isDisplay;
    @api
    rating;
    
    constructor() {
        super();
        this.isDisplay = true;
    }

    employee = {
        id : 1001,
        name : 'Sanjay',
        salary : 10000
    }
}