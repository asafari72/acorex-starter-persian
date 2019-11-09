import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AXBasePageComponent, MenuItem, SelectItem } from 'acorex-ui';

@Component({
    selector: 'ac-invoices',
    templateUrl: './invoices.page.html',
    styleUrls: ['./invoices.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ACInvoicesPage extends AXBasePageComponent {
    constructor() {
        super()
    }

    moreText: string = "نمایش بیشتر"
    dataItems: any[] = [];
    selectBoxItems: SelectItem[] = [
        { id: "1", text: "Select Option 1" },
        { id: "2", text: "Select Option 2" },
        { id: "3", text: "Select Option 3" },
        { id: "4", text: "Select Option 4" },
        { id: "5", text: "Select Option 5" }
    ];
    showMore: boolean = false;
    actionItems: MenuItem[] = [
        {
            name: "save",
            text: "ذخیره",
            style: "ax-success",
            icon: "fas fa-save"
        },
        {
            name: "print",
            text: "پرینت",
            style: "ax-dark",
            icon: "fas fa-print"
        }
    ]
    menuItemClickHandler(e: MenuItem) {
    }

    hotelingSelectedItemsChange() {
    }
    onMoreClick() {
        this.showMore = !this.showMore
        if (this.showMore) {
            this.moreText = "نمایش کمتر"
        }
        else {
            this.moreText = "نمایش بیشتر"
        }
    }

    handelRowChange(e) {
        this.dataItems.push(e)
        console.log(this.dataItems)
    }

    hotelingSelect: SelectItem[] = [
        { id: "0", text: "مغایرت تعرفه درخواستی" },
        { id: "1", text: "کسر درجه ارزشیابی" },
        { id: "2", text: "مغایرت تعداد روز بستری با تعداد درخواستی" },
        { id: "3", text: "ثبت تکراری" },
        { id: "4", text: "عدم حضور پزشک مقیم در بخش های ویژه" },
        { id: "5", text: "اضافه قیمت" },
        { id: "6", text: "مغایرت نوع تخت" }
    ]
    nurseSelect: SelectItem[] = [
        { id: "0", text: "اشتباه محاسباتی" },
        { id: "1", text: "ثبت تکراری" },
        { id: "2", text: "اضافه قیمت" }
    ]
    visitSelect: SelectItem[] = [
        { id: "0", text: "عدم صحت ضریب ترجیحی مناطق محروم" },
        { id: "1", text: "مغایرت نوع ویزیت" },
        { id: "2", text: "عدم صحت ضریب ریالی محاسبه" },
        { id: "3", text: "اضافه تعداد درخواست" },
        { id: "3", text: "اضافه تعداد درخواست" }


    ]
}
