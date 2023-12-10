/**
 * @fileOverview Interfaces for Types.
 */

export interface IType {
  readonly fullName: string;
  readonly name: string;
  readonly namespace: string;
  readonly baseType: IType;
  readonly isArray: boolean;
  factory(...args: any[]): any;
}
