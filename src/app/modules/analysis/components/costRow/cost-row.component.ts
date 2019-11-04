import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() selectItems: any[] = []

    @Output()
    onRowDataChange: EventEmitter<any> = new EventEmitter<any>();

    handleChangeTextBox(e) {

        let data = {
            requestAmount: e.target.value
        }

        this.onRowDataChange.emit(data)
    }
}
