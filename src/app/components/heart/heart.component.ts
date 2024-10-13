import { animate, AnimationBuilder, AnimationMetadata, group, keyframes, query, style } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, scan, Subscription } from 'rxjs';

@Component({
  selector: 'app-heart',
  standalone: true,
  imports: [],
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss',
})
export class HeartComponent implements AfterViewInit, OnDestroy{
  private mouseClick$!: Subscription;

  // @ts-ignore
  @ViewChild('animationElement') public animationElement;

  constructor(private builder: AnimationBuilder) {}

  public ngAfterViewInit(): void {
    if (this.mouseClick$) {
      this.mouseClick$.unsubscribe();
    }

    const element = this.animationElement.nativeElement;
    const wrapper = document.querySelector('.heart');

    //@ts-ignore
    this.mouseClick$ = fromEvent(wrapper, 'click')
      .pipe(
        scan((count: number) => count + 1, 0),
        filter((count) => count === 3)
      )
      .subscribe(() => this.cpr(element));
  }

  public ngOnDestroy(): void {
    if (this.mouseClick$) {
      this.mouseClick$.unsubscribe();
    }
  }

  private play(animation: AnimationMetadata | AnimationMetadata[], element: any): void {
    const factory = this.builder.build(animation);
    let player = factory.create(element);

    player.onDone(() => {
      this.play(animation, element);
    });

    player.play();
  }

  private cpr(element: any): void {
    const cprAnimation = [
      group([
        query(
          '.heart',
          animate(
            '1.5s ease-out',
            keyframes([
              style({ transform: '*' }),
              style({ transform: 'scale(1.1)' }),
              style({ transform: 'scale(0.6)' }),
              style({ transform: '*' }),
            ])
          )
        ),
        query(
          '.part',
          animate(
            '1.5s ease-out',
            keyframes([
              style({ boxShadow: '0 0 60px rgba(213, 9, 60, 0.6)' }),
              style({ boxShadow: '0 0 400px rgba(213, 9, 60, 1)' }),
              style({ boxShadow: '0 0 0 rgba(213, 9, 60, 1)' }),
              style({ boxShadow: '*' }),
            ])
          )
        ),
      ]),
    ];

    this.play(cprAnimation, element);
  }
}
