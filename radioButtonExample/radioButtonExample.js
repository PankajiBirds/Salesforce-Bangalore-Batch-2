import { LightningElement } from 'lwc';

export default class RadioButtonExample extends LightningElement {

    selectedStatus = '';

    displayStatus = '';

    get statusOptions() {
        return [ 
            {label : 'Active', value : 'active'},
            {label : 'Inactive', value : 'inactive'},
            {label : 'Completed', value : 'completed'},
        ]
    }

    handleStatus(e) {
        this.displayStatus = e.target.value;
    }

}