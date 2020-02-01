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
  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.list = [
      "Thêm mới trí hữu bùi tvhanh niên cứng việt nam 201032 a13 313",
      "Sửa",
      "Xóa"
    ];
  }
  drawUseCase(): void {
    let x = 100;
    let width = 150;
    for (let i = 0; i < this.list.length; i++) {
      this.ctx.beginPath();
      this.ctx.fillStyle = "back";
      this.ctx.ellipse(x, 100 + i * 150, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
      this.ctx.stroke();
      //draw text
      let listText = this.slipText(this.list[i]);
      let textLeng = 0;
      let textIndex = 0;
      let textTmp = "";
      let rowCount = 0;
      for (let j = 0; j < listText.length; j++) {
        this.ctx.beginPath();
        this.ctx.font = "12px serif";
        if (textLeng == 0) {
          textTmp = "";
        }
        textLeng = textLeng + this.ctx.measureText(listText[j]).width;

        if (textLeng < width) {
          textTmp = textTmp + " " + listText[j];
          console.info(textTmp + "/");
        }
        if (
          (textLeng < width && j <= listText.length - 1) ||
          textLeng > width
        ) {
          textLeng = 0;
          this.ctx.fillText(textTmp, 50, 90 + i * 150 + rowCount * 100);
          rowCount = +rowCount;
        }
      }
    }
  }
  slipText(text): any {
    let list = text.split(" ", 3);
    return list;
  }
}
