import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObjectUtilService {
  // Check object is empty or not
  isEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }

  // Deep compare two objects
  deepEqual(a: any, b: any): boolean {
    // Same reference/value
    if (a === b) {
      return true;
    }

    // If one is null
    if (a == null || b == null) {
      return false;
    }

    // If not object
    if (typeof a !== 'object' || typeof b !== 'object') {
      return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // Different key length
    if (keysA.length !== keysB.length) {
      return false;
    }

    // Compare each key recursively
    for (let key of keysA) {
      if (!keysB.includes(key) || !this.deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }
}
