import { LightningElement, api, track } from 'lwc';
import { FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class RecordEditFormFlow extends LightningElement {
    //
    @track showForm = true;

    // FLOW INPUT VARIABLES
    @api objectName;
    @api inputRecordId
    @api recordTypeId;
    @api density;
    @api field1;
    @api field2
    @api field3;
    @api field4;
    @api field5;
    @api field6;
    @api field7;
    @api field8;
    @api field9;
    @api field10;

    // FLOW OUTPUT VARIABLES
    @api outputRecordId

    handleSuccess(event){
        this.outputRecordId = event.detail.id;
        this.showForm = false;
    }

    handleNext(){
        const navigateNextEvent = new FlowNavigationNextEvent();
        this.dispatchEvent(navigateNextEvent);
    }
}