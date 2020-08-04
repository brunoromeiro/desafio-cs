import { ActivatedRouteSnapshot, convertToParamMap, ParamMap, Params, Route } from '@angular/router';
import { ReplaySubject } from 'rxjs';

export const ACTIVATED_ROUTE_SNAPSHOT: ActivatedRouteSnapshot = {
  params: {},
  children: [],
  component: undefined,
  data: undefined,
  firstChild: undefined,
  fragment: '',
  outlet: '',
  paramMap: undefined,
  parent: undefined,
  pathFromRoot: [],
  queryParamMap: undefined,
  queryParams: undefined,
  root: undefined,
  routeConfig: undefined,
  url: [],
  toString: undefined
};

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private paramMapSubject = new ReplaySubject<ParamMap>();
  private paramsSubject = new ReplaySubject<Params>();
  private queryParamMapSubject = new ReplaySubject<ParamMap>();
  private queryParamsSubject = new ReplaySubject<Params>();
  private snapshot: Partial<ActivatedRouteSnapshot> = {params: {}};
  private routeConfig: Partial<Route> = {path: ''};

  /** The mock paramMap observable */
  readonly paramMap = this.paramMapSubject.asObservable();
  readonly params = this.paramsSubject.asObservable();
  readonly queryParamMap = this.queryParamMapSubject.asObservable();
  readonly queryParams = this.queryParamsSubject.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.paramMapSubject.next(convertToParamMap(params));
    this.snapshot.params = params;
  }

  setParams(params?: Params) {
    this.paramsSubject.next(params);
    this.snapshot.params = params;
  }
}
