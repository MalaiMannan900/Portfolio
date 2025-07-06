import { Component, Renderer2,AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';
  isSticky: boolean = false;
  showScrollUp: boolean = false;
  
  @ViewChild('navbar', { static: false }) navbar!: ElementRef;
  @ViewChild('scrollUpBtn', { static: false }) scrollUpBtn!: ElementRef;
  @ViewChild('menu', { static: false }) menu!: ElementRef;
  @ViewChild('menuIcon', { static: false }) menuIcon!: ElementRef;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;


  if (this.navbar) {
    if (scrollY > 20) {
      this.renderer.addClass(this.navbar.nativeElement, 'sticky');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'sticky');
    }
  }

    if (this.scrollUpBtn) {
      scrollY > 500
        ? this.renderer.addClass(this.scrollUpBtn.nativeElement, 'show')
        : this.renderer.removeClass(this.scrollUpBtn.nativeElement, 'show');
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.style.scrollBehavior = 'auto';
  }

  toggleMenu(): void {
    if (this.menu && this.menuIcon) {
      this.menu.nativeElement.classList.toggle('active');
      this.menuIcon.nativeElement.classList.toggle('active');
    }
  }

 // Smooth scroll + mobile menu close
onMenuLinkClick(): void {
  document.documentElement.style.scrollBehavior = 'smooth';
  if (this.menu && this.menuIcon) {
    this.menu.nativeElement.classList.remove('active');
    this.menuIcon.nativeElement.classList.remove('active');
  }
}  
ngAfterViewInit(): void {
    const options = {
      strings: ['Java Full Stack Developer', 'Software Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    new Typed('.typing', options);
    new Typed('.typing-2', options);
  }

projects = [
  {
    title: 'Interview360',
    img: '/assets/images/interview360.png',
    link: 'https://play.google.com/store/apps/details?id=com.qads.ennuvathellam_uyarvu',
    description: 'Streamlining Interview Scheduling and Candidate Document Verification in One Platform.'
  },
  {
    title: 'ShipLink',
    img: '/assets/images/shiplink.png',
    link: 'https://play.google.com/store/apps/details?id=com.app.localJobFinder',
    description: 'ShipLink – Shipping Container Import & Export Management System'
  },
  {
    title: 'FishPort Trade',
    img: '/assets/images/fishport.png',
    link: 'https://play.google.com/store/apps/details?id=com.stepShopping.userapp',
    description: 'FishPort Trade is a web application that helps companies manage the import and export of fish. It allows users to track fish rates per kilogram, record transactions, manage company details, handle shipments, and generate export documents '
  },

];


scrollLeft() {
  this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight() {
  this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}

}
