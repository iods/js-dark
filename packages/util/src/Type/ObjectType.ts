/**
 * @fileOverview Type definition for an object.
 */

import { IType } from "./types";

let objectType;
const ObjectType: IType = objectType = Object.seal({
  fullName: 'Object',
  name: 'Object',
  namespace: '',
  baseType: objectType,
  isArray: false,
  factory: Object,
});

export default ObjectType;
