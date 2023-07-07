//17
export class Point {
  public constructor(private x?: number, private y?: number) {}

  public draw() {
    console.log("x: " + this.x + ", y: " + this.y);
  }
}
