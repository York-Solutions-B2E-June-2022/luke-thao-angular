
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {DataService} from "../data.service";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.dataService.user) {
      return true
    }

    this.router.navigate(['login'])
    return false
  }

}
