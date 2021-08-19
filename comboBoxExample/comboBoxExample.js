import { LightningElement } from 'lwc';

export default class ComboBoxExample extends LightningElement {

    citiesOption = [
        {label : 'Ajmer', value : 'ajmer'},
        {label : 'Jaipur', value : 'jaipur'},
        {label : 'Bangalore', value : 'bangalore'},
        {label : 'Bhopal', value : 'bhopal'},
    ];

    selectedCity = "bangalore";

    handleCityChange(e) {
        //  alert("Hello world");
        this.selectedCity =  e.target.value;
    }

    get stateOptions() {
        return [
            {label : 'Rajasthan', value : 'jaipur'},
            {label : 'Madhya Pradesh', value : 'bhopal'},
            {label : 'Karnataka', value : 'bangalore'}
        ]
    }

    selectedState = '';

    handleStateChange(e) {        
        this.selectedState = e.target.value;
    }
}