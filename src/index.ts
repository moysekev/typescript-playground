
const inferredTypeOfResultVariable = () => {
    const a: number = 5;
    const b: string = 'hello';
    const result = a + b;
    console.log('inferredTypeOfResultVariable', result, typeof result); // string
}
inferredTypeOfResultVariable();

const typeUnion = () => {
    type A = { a: number };
    type B = { b: string };
    type MyType = A | B;
    const obj: MyType = { a: 5 };
    console.log('typeUnion', obj);
}
typeUnion();

const typeIntersection = () => {
    type A = { a: number };
    type B = { b: string };
    type MyType = A & B;
    const obj: MyType = { a: 5, b: 'foo' };
    console.log('typeIntersection', obj);
}
typeIntersection();

const typeGuard = () => {
    type A = { a: number };
    type B = { b: string };
    type MyType = A | B;
    const obj: MyType = { a: 5 };
    if ('b' in obj) {
        console.log('typeGuard', obj.b);
    } else {
        console.log('typeGuard', 'no b property');
    }
}
typeGuard();

const pickProperty = () => {
    type SomeType = { a: number; b: string; c: boolean };
    type OtherType = Pick<SomeType, 'a' | 'b'>;
    // const result: OtherType = { a: 42, b: 'hello', c: 'c does not exist in type Pick<SomeType, "a" | "b">' };
    const result: OtherType = { a: 42, b: 'hello' };
    // const result: OtherType = { a: 42}; //Property 'b' is missing in type '{ a: number; }' but required in type 'OtherType'.
};
pickProperty();

// ----------------------------
interface Person {
    name: string;
    age: number;
}

class Student implements Person {
    name: string; // required to implement Person
    age: number;  // required to implement Person
}
// ----------------------------

namespace utils {
    export class Logger {
        log(message: string) {
            console.log(message);
        }
    }
}


// ----------------------------
// What is the difference between the any and unknown types in TypeScript?
// 'any' allows all operations on values, while 'unknown' requires a type guard
// ----------------------------

// ----------------------------
// How to create a generic reverseArray function to reverse the elements of an array while maintaining type safety?
// https://www.typescriptlang.org/docs/handbook/2/generics.html
//
// ok but missing type
function reverseArray(arr: any[]) {
    return arr.reverse();
}

// Cannot find name 'T'
// function reverseArray2(arr: Array<T>): Array<T> {
//     return arr.reverse();
// }

// correct
function reverseArray3<T>(arr: T[]): T[] {
    return arr.reverse();
}

// Parameter 'arr' implicitly has an 'any' type, but a better type may be inferred from usage
function reverseArray4<T>(arr) {
    return arr.reverse();
}
// ----------------------------

// ----------------------------
// What is a tuple in TypeScript?
// => An array with fixed size and fixed types