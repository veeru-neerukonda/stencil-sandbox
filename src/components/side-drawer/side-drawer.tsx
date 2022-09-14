import {h,Component,Prop,State, Method} from '@stencil/core';

@Component({
    tag: 'wc-side-drawer',
    shadow: true,
    styleUrl: './side-drawer.css'
})
export class SideDrawer{
    
    @Prop() heading: string;
    @Prop({reflect: true, mutable: true}) opened = false;
    @State() showContactPage = false;

    @Method()
    Close(){
        this.opened = false;
    }

    render(){
        let page = <slot/>;
        if(this.showContactPage === true){
            page = (
                <section>
                    <h2>Contact Information</h2>
                    <p>You can reach us either by phone or email.</p>
                    <ul>
                        <li>Phone: +91 07X-456-XXXX</li>
                        <li><a href="mailto:Someone@Something.com">Email: Someone@Something.com</a></li>
                    </ul>
                </section>
            );
        }

        return [
            <div class="backdrop"></div>,
            <aside>
                <header>
                    <h1>{this.heading}</h1>
                    <ion-icon name="close" onClick={this.Close.bind(this)}></ion-icon>
                </header>

                <section class="tab">
                    <a href="javascript:void(0)" onClick={(() => this.showContactPage=false).bind(this)}class={'btn '+ (!this.showContactPage?'active':'')}>Navigation</a>
                    <a href="javascript:void(0)" onClick={(() => this.showContactPage=true).bind(this)} class={'btn '+ (this.showContactPage?'active':'')}>Contact</a>
                </section>

                {page}
            </aside>
        ];
    }
}