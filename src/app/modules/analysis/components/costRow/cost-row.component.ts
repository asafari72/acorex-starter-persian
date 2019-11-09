import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'acorex-ui';

@Component({
    selector: 'ac-cost-row',
    templateUrl: './cost-row.component.html',
    styleUrls: ['./cost-row.component.scss']
})
export class ACCostRowComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    @Input() label: string = "";
    @Input() name: string = "";
    @Input() selectItems: SelectItem[] = []

    requestedAmount: number = null;
    fractionsAmount: number = null;
    confirmedAmount: number = null;
    numericOnly: any[] = [/(^[0-9][A-Za-z0-9 -]*$)/];

    handleAmount() {
        debugger;
        this.confirmedAmount = Number(this.requestedAmount) - Number(this.fractionsAmount)
        if (this.fractionsAmount) {
            this.handleChangeTextBox()
        }

    }


    selectChange(e: SelectItem) {
        console.log("select", e)

    }

    @Output()
    onRowDataChange: EventEmitter<any> = new EventEmitter<any>();

    handleChangeTextBox() {

        let data = {
            requestedAmount: this.requestedAmount,
            fractionsAmount: this.fractionsAmount,
            confirmedAmount: this.confirmedAmount,
        }

        this.onRowDataChange.emit(data)
    }

}
