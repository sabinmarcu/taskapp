import {Component, ElementRef} from "angular2/core";
import {FabComponent} from "../fab";

export enum MenuState {
    Closed,
    Open,
}

@Component({
    selector: "documents-list",
    template: require("./index.html"),
    styles: [ require("./index.styl") ],
    directives: [FabComponent]
})
export class DocumentsListComponent {
    private state: MenuState = MenuState.Closed;
    private states = MenuState;

    toggle() { 
        this.state =
            (this.state == MenuState.Closed && MenuState.Open) ||
            (this.state == MenuState.Open && MenuState.Closed);
    }
}