/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TeamsPage {
    }
}
declare global {
    interface HTMLTeamsPageElement extends Components.TeamsPage, HTMLStencilElement {
    }
    var HTMLTeamsPageElement: {
        prototype: HTMLTeamsPageElement;
        new (): HTMLTeamsPageElement;
    };
    interface HTMLElementTagNameMap {
        "teams-page": HTMLTeamsPageElement;
    }
}
declare namespace LocalJSX {
    interface TeamsPage {
    }
    interface IntrinsicElements {
        "teams-page": TeamsPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "teams-page": LocalJSX.TeamsPage & JSXBase.HTMLAttributes<HTMLTeamsPageElement>;
        }
    }
}
