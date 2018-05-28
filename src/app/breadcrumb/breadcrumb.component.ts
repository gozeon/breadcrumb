import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from './breadcrumb';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => this.buildBreadCrumb(this.activatedRoute.root))
  );

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
    console.log(this.breadcrumbs)
  }

  ngOnInit() {
  }

  /**
   * seconde method
   * @link https://angular.io/api/router/UrlTree
   *
   * const urlTree: UrlTree = route.parseUrl(route.url);
   */

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<Breadcrumb> = []): Array<Breadcrumb> {
    const label = route.routeConfig ? route.routeConfig.data['breadcrumb']['label'] : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}/`;
    const breadcrumb = new Breadcrumb(label, nextUrl);
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
