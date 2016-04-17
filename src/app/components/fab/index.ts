import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: "fab",
    template: require("./template"),
    styles: [require("./styles")],
})
export class FabComponent {
    @Input() icon: string = "menu"
    @Input() id: string;
    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    click(id: string): void {
        this.change.emit(id);
    }
}

@Component({
    selector: "fabcollection",
    template: "<h1>Col</h1>",
})
export class FabCollectionComponent {

}