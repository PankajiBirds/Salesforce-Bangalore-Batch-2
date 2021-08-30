import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

export default class DisplayPicklistUsingLDS extends LightningElement {

    typeValues = {};
    city__c = {};
    stageName = {};

    @wire(getPicklistValues , {
        recordTypeId : '012000000000000AAA',
        fieldApiName : 'Opportunity.Type'
    }) allTypesOfOpportunity({error, data}){
        if(data) {
            console.log("@# ",data);
            this.typeValues = data.values;
        } else {
            console.log("#$ ",error);
        }
    }

    @wire(getPicklistValuesByRecordType, {
        recordTypeId : '012000000000000AAA',
        objectApiName : 'Opportunity'
    }) opportunityPickListValues({error, data}){
        if(data) {
            console.log('!@! ', data);
            this.city__c = data.picklistFieldValues.City__c.values;
            this.stageName = data.picklistFieldValues.StageName.values;
        } else {
            console.log('*@', error)
        }
    }    
}