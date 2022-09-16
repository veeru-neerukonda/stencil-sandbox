/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StockFinder {
        "searchWord": string;
    }
    interface WcSideDrawer {
        "Close": () => Promise<void>;
        "heading": string;
        "opened": boolean;
    }
    interface WcTooltip {
        "text": string;
    }
}
declare global {
    interface HTMLStockFinderElement extends Components.StockFinder, HTMLStencilElement {
    }
    var HTMLStockFinderElement: {
        prototype: HTMLStockFinderElement;
        new (): HTMLStockFinderElement;
    };
    interface HTMLWcSideDrawerElement extends Components.WcSideDrawer, HTMLStencilElement {
    }
    var HTMLWcSideDrawerElement: {
        prototype: HTMLWcSideDrawerElement;
        new (): HTMLWcSideDrawerElement;
    };
    interface HTMLWcTooltipElement extends Components.WcTooltip, HTMLStencilElement {
    }
    var HTMLWcTooltipElement: {
        prototype: HTMLWcTooltipElement;
        new (): HTMLWcTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "stock-finder": HTMLStockFinderElement;
        "wc-side-drawer": HTMLWcSideDrawerElement;
        "wc-tooltip": HTMLWcTooltipElement;
    }
}
declare namespace LocalJSX {
    interface StockFinder {
        "searchWord"?: string;
    }
    interface WcSideDrawer {
        "heading"?: string;
        "opened"?: boolean;
    }
    interface WcTooltip {
        "text"?: string;
    }
    interface IntrinsicElements {
        "stock-finder": StockFinder;
        "wc-side-drawer": WcSideDrawer;
        "wc-tooltip": WcTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stock-finder": LocalJSX.StockFinder & JSXBase.HTMLAttributes<HTMLStockFinderElement>;
            "wc-side-drawer": LocalJSX.WcSideDrawer & JSXBase.HTMLAttributes<HTMLWcSideDrawerElement>;
            "wc-tooltip": LocalJSX.WcTooltip & JSXBase.HTMLAttributes<HTMLWcTooltipElement>;
        }
    }
}
