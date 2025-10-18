# 🎨 Animation Components Index

Quick reference for all animation components in this project.

---

## 📦 Component List

### 1. fade-in-section.tsx
**Purpose:** Fade content in from various directions
```tsx
<FadeInSection direction="up" distance={80} delay={0.2}>
  <Content />
</FadeInSection>
```
**Props:**
- `direction`: "up" | "down" | "left" | "right" | "none"
- `distance`: number (default: 80)
- `delay`: number (default: 0)

---

### 2. scroll-reveal-text.tsx
**Purpose:** Reveal text character by character
```tsx
<ScrollRevealText stagger={0.02} duration={0.6}>
  Your text here
</ScrollRevealText>
```
**Props:**
- `children`: string
- `stagger`: number (default: 0.02)
- `duration`: number (default: 0.6)

---

### 3. scroll-scale-section.tsx
**Purpose:** Scale content on scroll
```tsx
<ScrollScaleSection scaleFrom={0.8} scaleTo={1}>
  <Content />
</ScrollScaleSection>
```
**Props:**
- `scaleFrom`: number (default: 0.8)
- `scaleTo`: number (default: 1)

---

### 4. parallax-text.tsx
**Purpose:** Create parallax effect on text
```tsx
<ParallaxText speed={0.5}>
  <h1>Heading</h1>
</ParallaxText>
```
**Props:**
- `speed`: number (default: 0.5)

---

### 5. stagger-cards.tsx
**Purpose:** Animate children with staggered timing
```tsx
<StaggerCards stagger={0.15}>
  <Card />
  <Card />
  <Card />
</StaggerCards>
```
**Props:**
- `stagger`: number (default: 0.15)

---

### 6. scroll-progress-bar.tsx
**Purpose:** Show scroll progress
```tsx
<ScrollProgressBar />
```
**Props:** None

---

### 7. magnetic-cursor.tsx
**Purpose:** Custom cursor with magnetic effect
```tsx
<MagneticCursor />
```
**Props:** None
**Usage:** Add `data-magnetic` to elements

---

### 8. scroll-counter.tsx
**Purpose:** Animated number counter
```tsx
<ScrollCounter 
  end={1000} 
  start={0}
  duration={2}
  prefix="$"
  suffix="+"
/>
```
**Props:**
- `end`: number (required)
- `start`: number (default: 0)
- `duration`: number (default: 2)
- `prefix`: string (default: "")
- `suffix`: string (default: "")

---

### 9. rotating-words.tsx
**Purpose:** Rotate through words with 3D effect
```tsx
<RotatingWords 
  words={["Word1", "Word2", "Word3"]}
  interval={2000}
/>
```
**Props:**
- `words`: string[] (required)
- `interval`: number (default: 2000)

---

### 10. text-scramble.tsx
**Purpose:** Scramble text effect
```tsx
<TextScramble 
  text="Amazing Text"
  speed={50}
  trigger={true}
/>
```
**Props:**
- `text`: string (required)
- `speed`: number (default: 50)
- `trigger`: boolean (default: true)

---

### 11. horizontal-scroll-section.tsx
**Purpose:** Horizontal scrolling panels
```tsx
<HorizontalScrollSection>
  <Panel />
  <Panel />
  <Panel />
</HorizontalScrollSection>
```
**Props:** None

---

### 12. pin-section.tsx
**Purpose:** Pin content while scrolling
```tsx
<PinSection pinSpacing={true}>
  <Content />
</PinSection>
```
**Props:**
- `pinSpacing`: boolean (default: true)

---

### 13. image-reveal.tsx
**Purpose:** Reveal images with overlay wipe
```tsx
<ImageReveal 
  src="/image.jpg"
  alt="Description"
  overlayColor="#000"
/>
```
**Props:**
- `src`: string (required)
- `alt`: string (required)
- `overlayColor`: string (default: "#000")

---

### 14. scroll-morphing-text.tsx
**Purpose:** Morph between texts on scroll
```tsx
<ScrollMorphingText 
  texts={["First", "Second", "Third"]}
/>
```
**Props:**
- `texts`: string[] (required)

---

### 15. smooth-reveal-section.tsx
**Purpose:** Clip-path reveal animations
```tsx
<SmoothRevealSection clipPath="circle">
  <Content />
</SmoothRevealSection>
```
**Props:**
- `clipPath`: "circle" | "polygon" | "inset" (default: "inset")

---

### 16. split-text-animation.tsx
**Purpose:** Advanced text splitting
```tsx
<SplitTextAnimation
  animationType="fadeUp"
  splitBy="chars"
  stagger={0.03}
>
  Your text
</SplitTextAnimation>
```
**Props:**
- `children`: string (required)
- `animationType`: "fadeUp" | "fadeIn" | "scaleUp" | "slideRight"
- `splitBy`: "chars" | "words"
- `stagger`: number (default: 0.03)

---

## 🎯 Quick Selection Guide

### For Headlines:
- `ScrollRevealText`
- `SplitTextAnimation`
- `ParallaxText`

### For Sections:
- `FadeInSection`
- `ScrollScaleSection`
- `SmoothRevealSection`

### For Grids:
- `StaggerCards`

### For Numbers:
- `ScrollCounter`

### For Special Effects:
- `RotatingWords`
- `TextScramble`
- `ScrollMorphingText`

### For Advanced:
- `HorizontalScrollSection`
- `PinSection`
- `ImageReveal`

### Global:
- `ScrollProgressBar`
- `MagneticCursor`
- `SmoothScrollProvider` (in layout)

---

## 📁 File Locations

All components are in the `components/` directory:
```
components/
├── fade-in-section.tsx
├── scroll-reveal-text.tsx
├── scroll-scale-section.tsx
├── parallax-text.tsx
├── stagger-cards.tsx
├── scroll-progress-bar.tsx
├── magnetic-cursor.tsx
├── scroll-counter.tsx
├── rotating-words.tsx
├── text-scramble.tsx
├── horizontal-scroll-section.tsx
├── pin-section.tsx
├── image-reveal.tsx
├── scroll-morphing-text.tsx
├── smooth-reveal-section.tsx
└── split-text-animation.tsx
```

---

## 🎬 Import Examples

```tsx
// Single import
import { FadeInSection } from "@/components/fade-in-section"

// Multiple imports
import { 
  ScrollRevealText,
  ScrollScaleSection,
  FadeInSection 
} from "@/components/[component-name]"
```

---

## ✅ Testing Checklist

- [ ] Scroll through entire page
- [ ] Test on mobile
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Check cursor on desktop
- [ ] Verify progress bar
- [ ] Test all counters
- [ ] Check stagger animations
- [ ] Verify parallax effects
- [ ] Test reduced motion

---

**All components are production-ready! 🚀**

