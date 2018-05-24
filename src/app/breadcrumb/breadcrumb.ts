export class Breadcrumb {
  label: string;
  url: string;

  constructor(label: string, href: string) {
    this.label = label;
    this.url = href;
  }
}
