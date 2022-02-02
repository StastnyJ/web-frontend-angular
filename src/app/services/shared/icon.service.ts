import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  public readonly DISCUSSION = '🗨';
  public readonly BACK = '❮';
  public readonly UNPACK = 'ᐁ';
  public readonly CHECKMARK = '✓';
  public readonly EMAIL = '🖃';
  public readonly SCHOOL = '🎓';
  public readonly LOCATION = '🖈';
  public readonly EDIT = '🖉';

  constructor() { }
}
