import { LightningElement, api, track} from 'lwc';
import Status__c from '@salesforce/schema/Entity__c.Status__c';
import Name from '@salesforce/schema/Entity__c.Name';




export default class EntityRecordForm extends LightningElement{
    

    @api objectApiName = "Entity__c";
    @track fields = [Name, Status__c];

    handleSuccess(event){
        const refreshEvent = new CustomEvent('refreshdata');
        this.dispatchEvent(refreshEvent);
    }

}