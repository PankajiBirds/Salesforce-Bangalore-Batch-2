import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationServicesExample extends NavigationMixin(LightningElement) {

    handleHomePageClick() {
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'home'
            }
        });
    }

    handleChatterPageClick() {
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'chatter'
            }
        })
    }

    handleGoogleClick() {
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : 'https://www.google.com/'
            }
        })
    }

    handleOpenComponentClick() {
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes : {
                apiName : 'Components'
            }
        })
    }

    handleContactList() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'list'
            },
            state : {
                filterName : '00B5g00000OPHq2EAH'
            }
        })
    }

    handleNewContact() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            }
        })
    }

    handleEditContact() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'edit',
                recordId : '0035g00000Ah8bpAAB'
            }
        })
    }

    handleViewContact() {
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : '0035g00000Ah8bpAAB',
                objectApiName : 'Contact',
                actionName : 'view'    
            }
        })
    }

    handleContactWithDefault() {
        const contactDefaultValue = encodeDefaultFieldValues({
            FirstName : 'Default',
            LastName : 'Contact',
            Phone : '9090909090'
        })

        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'new'
            },
            state : {
                defaultFieldValues : contactDefaultValue
            }
        })
    }
}