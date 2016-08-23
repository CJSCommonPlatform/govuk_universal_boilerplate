import { Component, Directive, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// templateUrl example
import { Home } from './home';
//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

/////////////////////////
// ** Example Components
@Component({
  selector: 'about',
  template: `
    <div>This is the "About" page</div>
  `
})
export class About { }

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge
  ],
  styles: [require('./app.scss')],
  encapsulation: ViewEncapsulation.None,
  template: `
  <div id="skiplink-container">
    <div>
      <a href="#content" class="skiplink">Skip to main content</a>
    </div>
  </div>
  <div id="global-cookie-message">
    <p>GOV.UK uses cookies to make the site simpler. <a href="https://www.gov.uk/help/cookies">Find out more about cookies</a></p>
  </div>
  <header role="banner" id="global-header" class="with-proposition">
    <div class="header-wrapper">
      <div class="header-global">
        <div class="header-logo">
          <a href="https://www.gov.uk" title="Go to the GOV.UK homepage" id="logo" class="content">GOV.UK</a>
        </div>
      </div>
      <div class="header-proposition">
        <div class="content">
          <a href="#proposition-links" class="js-header-toggle menu">Menu</a>
          <nav id="proposition-menu">
            <a href="/" id="proposition-name">Angular Universal starter kit</a>
            <ul id="proposition-links">
              <li>
                <a [routerLink]=" ['./home'] ">Home</a>
              </li>
              <li>
                <a [routerLink]=" ['./about'] ">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div id="global-header-bar"></div>
  <main id="content" role="main">
    <router-outlet></router-outlet>
  </main>
  <footer class="group js-footer" id="footer">
    <div class="footer-wrapper">
      <div class="footer-meta">
        <div class="footer-meta-inner">
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cymraeg</a></li>
            <li>Built by <a href="#">Defra</a></li>
          </ul>
          <div class="open-government-licence">
            <p class="logo"><a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a></p>
            <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>
          </div>
        </div>
        <div class="copyright">
          <a href="https://www.nationalarchives.gov.uk/information-management/our-services/crown-copyright.htm">© Crown copyright</a>
        </div>
      </div>
    </div>
  </footer>
  `
})
export class App {

}
