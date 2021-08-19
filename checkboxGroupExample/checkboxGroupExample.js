import { LightningElement } from 'lwc';

export default class CheckboxGroupExample extends LightningElement {

    selectedHobbiArray = ['sleeping'];

    selectedHobbi = '';
    displaySelectedHobbies = '';    

    hobbies = [
        {label : 'Playing', value : 'playing'},
        {label : 'Sleeping', value : 'sleeping'},
        {label : 'Reading', value : 'reading'}
    ]

    handleHobbiChange(e) {
        this.selectedHobbi = e.target.value;
    }

    handleGetHobbi() {
        this.displaySelectedHobbies = this.selectedHobbi;
        
    }

}