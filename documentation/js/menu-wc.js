'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm-poec-atlas-nov documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' : 'data-target="#xs-components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' :
                                            'id="xs-components-links-module-AppModule-a6cbca4fa98e41aefa7fa0158fd6898eb2d9c1940a52f44ed36ebedad23bca406e7809266a6271c52e4bc581f1f06124855ae7c43a36cb9120059b608ec1e939"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-246238ec2b08b4fa6e3577f1f5228d28f8a40b3e0774a3720891fb49d31dfbeb8e05728d8fb7b876fc588db57938c2da10bb41bf3118b1272dffef3d344e9803"' : 'data-target="#xs-components-links-module-CoreModule-246238ec2b08b4fa6e3577f1f5228d28f8a40b3e0774a3720891fb49d31dfbeb8e05728d8fb7b876fc588db57938c2da10bb41bf3118b1272dffef3d344e9803"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-246238ec2b08b4fa6e3577f1f5228d28f8a40b3e0774a3720891fb49d31dfbeb8e05728d8fb7b876fc588db57938c2da10bb41bf3118b1272dffef3d344e9803"' :
                                            'id="xs-components-links-module-CoreModule-246238ec2b08b4fa6e3577f1f5228d28f8a40b3e0774a3720891fb49d31dfbeb8e05728d8fb7b876fc588db57938c2da10bb41bf3118b1272dffef3d344e9803"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-92a524a6e5a51e277004c60c859ac5ff64a799fb3937d35bce5a8d81d0fe0c0f00e9e7a50990a5d00ff97fd17e22cbf731fa1162236a9476dd8e6ac2a3b2356f"' : 'data-target="#xs-components-links-module-IconsModule-92a524a6e5a51e277004c60c859ac5ff64a799fb3937d35bce5a8d81d0fe0c0f00e9e7a50990a5d00ff97fd17e22cbf731fa1162236a9476dd8e6ac2a3b2356f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-92a524a6e5a51e277004c60c859ac5ff64a799fb3937d35bce5a8d81d0fe0c0f00e9e7a50990a5d00ff97fd17e22cbf731fa1162236a9476dd8e6ac2a3b2356f"' :
                                            'id="xs-components-links-module-IconsModule-92a524a6e5a51e277004c60c859ac5ff64a799fb3937d35bce5a8d81d0fe0c0f00e9e7a50990a5d00ff97fd17e22cbf731fa1162236a9476dd8e6ac2a3b2356f"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDayModeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDayModeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNightModeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNightModeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' :
                                            'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-bf13a93fc7120030912d5cf26006d38a2cc75e64ed09d381998fe24171e6a8be3373ce816a219aa8dbbe06de839e3f590c04aaf2a02508d2c7b1e1ec102ac127"' : 'data-target="#xs-components-links-module-UiModule-bf13a93fc7120030912d5cf26006d38a2cc75e64ed09d381998fe24171e6a8be3373ce816a219aa8dbbe06de839e3f590c04aaf2a02508d2c7b1e1ec102ac127"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-bf13a93fc7120030912d5cf26006d38a2cc75e64ed09d381998fe24171e6a8be3373ce816a219aa8dbbe06de839e3f590c04aaf2a02508d2c7b1e1ec102ac127"' :
                                            'id="xs-components-links-module-UiModule-bf13a93fc7120030912d5cf26006d38a2cc75e64ed09d381998fe24171e6a8be3373ce816a219aa8dbbe06de839e3f590c04aaf2a02508d2c7b1e1ec102ac127"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});