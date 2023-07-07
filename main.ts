import { Point } from "./point";
//01
// function log(message) {
//   console.log(message);
// }
// var message = "Hello World!";
// log(message);

//02
// function doSomething() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("Finally: " + i);
// }
// doSomething();

//03
// function doSomething() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("Finally: " + i);
// }
// doSomething();

//04
// let count = 5;
// count = "a";

//05
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3, 4];
// let f: any[] = [1, true, "a", false];
//
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
//
// enum Color {
//   Red = 0,
//   Green = 0,
//   Blue = 0,
//   Purple = 3,
// }
// let backgroundColor = Color.Red;

//06
// let message;
// message = "abc";
// let endsWithC = (<string>message).endsWith("c");
// let alternativeWay = (message as string).endsWith("c");

//07
// let log = function(message){
//   console.log(message);
// }
// let doLog = (message) => console.log(message);

//08
// let drawPoint = (x,y,a,b,c,d,e) =>{
//   //...
// }

//09
// let drawPoint1 = (point:{x:number,y:number}) => {
//   //...
// }
// drawPoint1({
//   x:1,
//   y:2
// })

//10
// interface Point{
//   x: number,
//   y: number
// }
// let drawPoint1 = (point: Point) => {
//   //...
// };
// drawPoint1({
//   x: 1,
//   y: 2
// });

//11
//  interface Point{
//   x: number,
//   y: number
// }
// let drawPoint1 = (point: Point) => {
//   //...
// }
// let getDistance = (pointA:Point,pointB:Point)=>{
//   //...
// }
// drawPoint1({
//   x: 1,
//   y: 2
// });

//12
// class Point {
//   x: number;
//   y: number;

//   draw() {
//     //..
//   }

//   getDistance(another: Point) {
//     //...
//   }
// }

//13
// class Point {
//   x: number;
//   y: number;

//   draw() {
//     console.log("x: " + this.x + ", y: " + this.y);
//   }

//   getDistance(another: Point) {
//     //...
//   }
// }
// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();

//14
// class Point {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     console.log("x: " + this.x + ", y: " + this.y);
//   }
// }
// let point = new Point(1, 2);
// point.draw();

//14
// class Point {
//   x: number;
//   y: number;

//   constructor(x?: number, y?: number) {
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     console.log("x: " + this.x + ", y: " + this.y);
//   }
// }
// let point = new Point();
// point.draw();

//15
// class Point {
//   private x: number;
//   private y: number;

//   public constructor(x?: number, y?: number) {
//     this.x = x;
//     this.y = y;
//   }

//   public draw() {
//     console.log("x: " + this.x + ", y: " + this.y);
//   }
// }
// let point = new Point();
// point.draw();

//15
// class Point {
//   public constructor(private x?: number, private y?: number) {}

//   public draw() {
//     console.log("x: " + this.x + ", y: " + this.y);
//   }
// }
// let point = new Point(1, 2);
// point.draw();

//15
// class Point {
//   public constructor(private x?: number, private y?: number) {}

//   public draw() {
//     console.log("x: " + this.x + ", y: " + this.y);
//   }

//   getX() {
//     return this.x;
//   }

//   setX(value) {
//     if (value < 0) throw new Error("value cannot be less than 0.");
//     this.x = value;
//   }
// }
// let point = new Point(1, 2);
// let x = point.getX();
// point.setX(10);
// point.draw();

//16
// class Point {
//   public constructor(private _x?: number, private _y?: number) {}

//   public draw() {
//     console.log("x: " + this._x + ", y: " + this._y);
//   }

//   get x() {
//     return this._x;
//   }

//   set x(value) {
//     if (value < 0) throw new Error("value cannot be less than 0.");
//     this._x = value;
//   }
// }
// let point = new Point(1, 2);
// let x = point.x;
// point.x = 10;
// point.draw();

//17
import { Point } from "./point";
let point = new Point(1, 2);
point.draw();
