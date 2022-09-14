import { h,Component,Prop } from "@stencil/core";

@Component({
    tag: 'wc-tooltip',
    shadow: true,
    styleUrl: './tool-tip.css'
})
export class ToolTip{

    @Prop() text: string;
    
    render(){
        return [
            <span><slot /></span>,
            <label htmlfor="icon-wrapper__checkbox" class="icon-wrapper">
                <ion-icon name="help-circle" class="icon-wrapper__icon"></ion-icon>
                <input type="checkbox" id="icon-wrapper__checkbox" />
                <div class="tooltip-text">{this.text}</div>
            </label>
        ];
    }
}