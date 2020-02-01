import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-draw-use-case",
  templateUrl: "./draw-use-case.component.html",
  styleUrls: ["./draw-use-case.component.css"]
})
export class DrawUseCaseComponent implements OnInit {
  @ViewChild("canvas", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  constructor() {}
  list: string[];
  MAX_WIDTH: number = 100;
  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.list = [
      "Thêm mới trí hữu bùi tvhanh niên cứng việt nam 201032 a13 313",
      "Sửa",
      "Xóa",
      "Xem chi tiết",
      "In",
      "Kết xuất Excel",
      "Xem chi tiết",
      "In",
      "Kết xuất Excel"
    ];
  }
  drawUseCase(): void {
    let x = 600;
    let y = 100;
    let restartIndex =Math.round(this.list.length / 2);
   
    //this.ctx.beginPath();
    for (let i = 0; i < this.list.length; i++) {
      this.ctx.beginPath();
      this.ctx.fillStyle = "back";
      //this.ctx.moveTo(0,this.list.length/2*120);
      let currentY = y + i * 120;
      if (restartIndex > i) {
        currentY = y + (i - restartIndex) * 120;
      }
      this.ctx.ellipse(x, currentY, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
      this.ctx.stroke();
      //draw text
      let textUseCase = this.list[i];
      let listLines = this.getLines(this.ctx, textUseCase, this.MAX_WIDTH);
      let textLeng = 0;
      let textIndex = 0;
      for (let j = 0; j < listLines.length; j++) {
        //this.ctx.beginPath();
        this.ctx.font = "12px serif";
        this.ctx.fillText(listLines[j], x - 50, currentY - 20 + j * 20);
      }
      if (i>restartIndex) {
        this.ctx.translate(-200, 0);
         //console.info(restartIndex);
      }
     
    }
  }
  getLines(ctx, text, maxWidth): any {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
}
