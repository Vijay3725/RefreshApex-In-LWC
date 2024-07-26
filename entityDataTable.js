import { LightningElement, api} from 'lwc';

const COLUMNS = [
{label: 'Status', fieldName: 'status', type: 'text'},
{label: 'Count', fieldName: 'count', type: 'number'}
]

export default class EntityStatusData extends LightningElement {
    @api counts;

    columns = COLUMNS;
   
}