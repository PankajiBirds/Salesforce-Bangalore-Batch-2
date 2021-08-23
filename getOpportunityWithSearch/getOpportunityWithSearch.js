import { LightningElement, wire } from 'lwc';
import opportunityList from '@salesforce/apex/OpportunityControllerLWC.opportunityList';

export default class GetOpportunityWithSearch extends LightningElement {

    allOpportunityList;
    searchText;
    // @wire (opportunityList) getOpportunites({error, data}){
    //     if(data) {
    //         this.allOpportunityList = data;
    //     } else {
    //         console.log("@@" , error);
    //     }
    // }

    connectedCallback() {
        this.handleSearch();
    }

    handleSearchInput(e) {
        this.searchText = e.target.value;
    }

    handleSearch() {                
        opportunityList({searchText : this.searchText}).then(result => {
            this.allOpportunityList = result;
        }).catch(error => {
            console.log("##", error);
        });
    }
}