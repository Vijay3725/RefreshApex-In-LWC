import { LightningElement, track, wire } from 'lwc';
import getStatus from '@salesforce/apex/StatusCalculator.getStatus';
import { refreshApex } from '@salesforce/apex';

export default class ParentComponent extends LightningElement {
    @track counts;
    wiredContactsResult;

    @wire(getStatus)
    wiredStatus(result) {
        this.wiredCountsResult = result;
        if (result.data) {
            this.counts = [...result.data]; // Spread operator to create a new array
        } else if (result.error) {
            this.counts = undefined;
        }
    }

    handleRefresh() {
        refreshApex(this.wiredCountsResult)
            .then(() => {
                // Ensure a new array is created for the contacts to trigger reactivity
                this.counts = [...this.wiredCountsResult.data];
            });
    }
}
