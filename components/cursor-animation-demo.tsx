"use client"

import { CursorAnimatedWrapper, CursorAnimatedText, CursorAnimatedCard, CursorAnimatedButton, CursorAnimatedElement } from "./cursor-animated-wrapper"
import { useCursorPosition } from "./hooks/use-cursor-position"

export function CursorAnimationDemo() {
  const { currentSection, isInSection, velocity, sectionProgress } = useCursorPosition()

  return (
    <section id="demo" className="container mx-auto px-4 lg:px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <CursorAnimatedText sectionId="demo" delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Cursor-Based Animations Demo
          </h2>
        </CursorAnimatedText>

        <CursorAnimatedText sectionId="demo" delay={0.2}>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Move your cursor into this section to see the animations in action!
          </p>
        </CursorAnimatedText>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <CursorAnimatedCard sectionId="demo" delay={0.1}>
            <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Fade Animation</h3>
              <p className="text-muted-foreground">
                This card uses a fade animation that triggers when your cursor is in this section.
              </p>
            </div>
          </CursorAnimatedCard>

          <CursorAnimatedCard sectionId="demo" delay={0.2}>
            <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Scale Animation</h3>
              <p className="text-muted-foreground">
                This card scales up when your cursor enters the section.
              </p>
            </div>
          </CursorAnimatedCard>

          <CursorAnimatedCard sectionId="demo" delay={0.3}>
            <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Blur Animation</h3>
              <p className="text-muted-foreground">
                This card starts blurred and becomes clear when cursor is in section.
              </p>
            </div>
          </CursorAnimatedCard>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <CursorAnimatedButton sectionId="demo" delay={0.4}>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-medium hover:scale-105 transition-transform">
              Magnetic Button
            </button>
          </CursorAnimatedButton>

          <CursorAnimatedButton sectionId="demo" delay={0.5}>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-medium hover:scale-105 transition-transform">
              Glass Button
            </button>
          </CursorAnimatedButton>
        </div>

        <CursorAnimatedElement sectionId="demo" animationType="rotate" delay={0.6} velocityMultiplier={0.5}>
          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Velocity-Based Animation</h3>
            <p className="text-muted-foreground">
              This element responds to your cursor velocity and movement patterns.
            </p>
            <div className="mt-4 text-sm text-primary">
              Current Section: {currentSection || "None"} | 
              Velocity: {Math.round(velocity.x)}, {Math.round(velocity.y)} | 
              Progress: {Math.round(sectionProgress * 100)}%
            </div>
          </div>
        </CursorAnimatedElement>
      </div>
    </section>
  )
}
