import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from "@angular/router";
// import {SessionStorageService} from "ngx-webstorage";
// import {Injectable} from "@angular/core";

// @Injectable({providedIn: 'root'})
// export class CacheRouteReuseStrategy implements RouteReuseStrategy {

// 	constructor(private seStorage: SessionStorageService) {
// 	}

// 	storedRouteHandles = new Map<string, DetachedRouteHandle>();
// 	allowCache = {};

// 	shouldReuseRoute(before: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
// 		try {
// 			this.seStorage.store('prePath', before.routeConfig.path);
// 			let data = before.routeConfig.data;
// 			if (Array.isArray(data.des)) {
// 				if (data.reuse && data.des && data.des.length > 0 && data.des.indexOf(this.getPath(curr)) != -1) {
// 					this.allowCache[data.path] = data.des;
// 				}
// 			} else if (typeof data.des == 'string') {
// 				if (data.reuse && data.des && this.getPath(curr) === data.des) {
// 					this.allowCache[data.path] = data.des;
// 				}
// 			}
// 		} catch (e) {
// 		}
// 		return before.routeConfig === curr.routeConfig;
// 	}

// 	retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
// 		let path = this.getPath(route);
// 		// console.log('retrieve: ' + path);

// 		if (Array.isArray(this.allowCache[path])) {
// 			let pre = this.seStorage.retrieve('prePath');

// 			if (this.allowCache[path].indexOf(pre) == -1) {
// 				return null;
// 			}
// 			return this.storedRouteHandles.get(path) as DetachedRouteHandle;
// 		} else if (typeof this.allowCache[path] == 'string') {
// 			let pre = this.seStorage.retrieve('prePath');
// 			if (pre !== this.allowCache[path]) {
// 				return null;
// 			}
// 			return this.storedRouteHandles.get(path) as DetachedRouteHandle;
// 		}
// 	}

// 	shouldAttach(route: ActivatedRouteSnapshot): boolean {
// 		const path = this.getPath(route);
// 		// console.log('shouldAttach: ' + path);

// 		if (Array.isArray(this.allowCache[path])) {
// 			if (this.allowCache[path].length > 0) {
// 				let pre = this.seStorage.retrieve('prePath');
// 				let reload = route.queryParams ? route.queryParams.reload : false;
// 				if (this.allowCache[path].indexOf(pre) == -1 || reload) {
// 					return false;
// 				}
// 				return this.storedRouteHandles.has(path);
// 			}
// 			return false;
// 		} else {
// 			if (this.allowCache[path]) {
// 				let pre = this.seStorage.retrieve('prePath');
// 				let reload = route.queryParams ? route.queryParams.reload : false;
// 				if (pre !== this.allowCache[path] || reload) {
// 					return false;
// 				}
// 				return this.storedRouteHandles.has(path);
// 			}
// 			return false;
// 		}
// 	}

// 	shouldDetach(route: ActivatedRouteSnapshot): boolean {
// 		const path = this.getPath(route);
// 		// console.log('shouldDetach: ' + path);
// 		return this.allowCache.hasOwnProperty(path);
// 	}

// 	store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
// 		this.storedRouteHandles.set(this.getPath(route), detachedTree);
// 	}

// 	private getPath(route: ActivatedRouteSnapshot): string {
// 		if (route.routeConfig && route.routeConfig.path !== null) {
// 			if (route.data && route.data.path) {
// 				return route.data.path;
// 			}
// 			return route.routeConfig.path;
// 		}
// 		return '';
// 	}

// }


}
