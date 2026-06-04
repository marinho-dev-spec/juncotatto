# LAYOUT VISUAL GUIDE - JUNCO TATTOO

Guia completo de como cada seção do site deve ser estruturada, com exemplos de layout.

---

## 1. HEADER (STICKY/FIXED)

```
┌───────────────────────────────────────────────────────────┐
│ [LOGO] Home | Portfolio | About | Contact    [SCHEDULE]   │ ← 60px height
├───────────────────────────────────────────────────────────┤
│                                                             │
│ Behavior: Remains fixed at top while scrolling            │
│ Background: Black (#000000)                                │
│ Text: White (#FFFFFF)                                      │
│ Logo: White, 40px height                                   │
│ CTA Button: Gold/White, 44px height                        │
│                                                             │
└───────────────────────────────────────────────────────────┘
```

**Design Details:**
- Logo on left (40-50px height)
- Menu centered: "Home | Portfolio | About | Contact"
- CTA button right: "Schedule" or "Book"
- Font: Clean sans-serif (Helvetica, Inter, Roboto)
- Hover state: Menu items underline or slight fade
- Mobile: Hamburger menu at <768px

---

## 2. HERO SECTION (100% VIEWPORT HEIGHT)

```
┌──────────────────────────────────────────────────────────────┐
│                                                                │
│         [BACKGROUND IMAGE - Tattoo]                          │
│         (1200x600px minimum, high quality)                   │
│                                                                │
│         ┌─────────────────────────────────────────────┐      │
│         │                                               │      │
│         │  Expert Fine Line Tattoos by Junco          │      │
│         │  (48-64px Serif, White, centered)           │      │
│         │                                               │      │
│         │  Custom Designs | Precision | Limited Avail │      │
│         │  (28-32px Sans-serif, Light gray, centered) │      │
│         │                                               │      │
│         │      ┌──────────────────────┐               │      │
│         │      │ BOOK YOUR SESSION    │  ← Gold bg   │      │
│         │      │    (18px, bold)      │    White text │      │
│         │      └──────────────────────┘  44px height  │      │
│         │                                               │      │
│         └─────────────────────────────────────────────┘      │
│         (Dark overlay: rgba(0,0,0,0.2-0.3))                  │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Background: Full viewport, cover property
- Overlay: Semi-transparent black (20-30% opacity)
- Text alignment: Center, vertically centered
- Button: 200px width x 50px height minimum
- Hover state: Slight color change or shadow
- Mobile: Reduce font sizes by 30%, button stays 44px height

---

## 3. ABOUT SECTION

```
┌──────────────────────────────────────────────────────────────┐
│  PADDING: 60px (top/bottom), 40px (left/right)               │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│                    ABOUT JUNCO                                │
│                  (36px Serif, Black, center)                 │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  [Profile Photo]     Bio Text:                         │ │
│  │   (300x300 circle    "Junco is a precision-focused    │ │
│  │    or square)        tattoo artist specializing       │ │
│  │                      in fine line custom designs      │ │
│  │                      with 10+ years experience..."    │ │
│  │                                                        │ │
│  │                      Key Stats:                        │ │
│  │                      • 10+ Years Experience           │ │
│  │                      • 5,000+ Satisfied Clients       │ │
│  │                      • Speciality: Fine Line          │ │
│  │                                                        │ │
│  │                      ┌──────────────┐                 │ │
│  │                      │  GET STARTED │                 │ │
│  │                      └──────────────┘                 │ │
│  │                                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                                │
│  Background: Light (white or light gray #F5F5F5)             │
│  Layout: 2-col (desktop), 1-col (mobile)                     │
│  Text: 16-18px, line-height 1.6                              │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Section padding: 60px vertical, 40px horizontal
- Photo: 300x300px (circle or square with border-radius)
- Bio text: Right column on desktop, below on mobile
- Font size: 18px (body), 24px (subheadings)
- CTA button: Secondary style (less prominent than hero)
- Stats in bullet format

---

## 4. PORTFOLIO/GALLERY SECTION

```
┌──────────────────────────────────────────────────────────────┐
│  PADDING: 60px                                                │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│                    PORTFOLIO                                  │
│              Showcase of Custom Work                         │
│                                                                │
│  FILTERS (Center): [All] [Fine Line] [Custom] [Small]       │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │          │ │          │ │          │                    │
│  │  IMG     │ │  IMG     │ │   IMG    │                    │
│  │ (600x600)│ │(700x700) │ │(600x600) │                    │
│  │          │ │          │ │          │                    │
│  │ Hover:   │ │ Hover:   │ │ Hover:   │                    │
│  │ Zoom +   │ │ Zoom +   │ │ Zoom +   │                    │
│  │ "Fine    │ │ "Custom" │ │ "Fine    │                    │
│  │  Line"   │ │ ↓Click   │ │  Line"   │                    │
│  └──────────┘ └──────────┘ └──────────┘                    │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │  IMG     │ │  IMG     │ │   IMG    │                    │
│  │ (700x700)│ │(600x600) │ │(600x600) │                    │
│  │          │ │          │ │          │                    │
│  │ Hover    │ │ Hover    │ │ Hover    │                    │
│  │effects   │ │effects   │ │effects   │                    │
│  └──────────┘ └──────────┘ └──────────┘                    │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │  IMG     │ │  IMG     │ │   IMG    │                    │
│  │[More...] │ │[...]     │ │[...]     │                    │
│  └──────────┘ └──────────┘ └──────────┘                    │
│                                                                │
│  [LOAD MORE] OR [Infinite Scroll]                            │
│                                                                │
│  Layout: 3-col (desktop), 2-col (tablet), 1-col (mobile)    │
│  Image sizes: Variable (masonry effect)                      │
│  Gap between images: 20-30px                                 │
│  Click behavior: Expand to lightbox                          │
│  Background: White or light gray                             │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Grid: 3-4 columns desktop, 2 columns tablet, 1 mobile
- Images: 600px min width, variable heights (masonry)
- Gap: 20-30px between items
- Hover: Zoom (1.05x) + overlay with label
- Click: Lightbox expand (fullscreen preview)
- Filters: Center-aligned, pill-style buttons
- Lazy loading: Images load on scroll
- Infinite scroll: Auto-load or "Load More" button

---

## 5. HOW IT WORKS SECTION

```
┌──────────────────────────────────────────────────────────────┐
│  PADDING: 60px                                                │
│  Background: Light gray (#F5F5F5)                            │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│                  HOW IT WORKS                                 │
│              Five Steps to Your Custom Tattoo                │
│                                                                │
│   STEP 1          STEP 2          STEP 3      STEP 4        │
│   ┌─────┐         ┌─────┐         ┌─────┐     ┌─────┐      │
│   │  1  │    →    │  2  │    →    │  3  │  →  │  4  │  →  │
│   └─────┘         └─────┘         └─────┘     └─────┘      │
│   Consult         Design          Prepare      Session      │
│   15 min          2-3 days        1 week       Custom      │
│   Free            Approval        Checklist    Execution   │
│                                                              │
│                          STEP 5                              │
│                          ┌─────┐                             │
│                          │  5  │                             │
│                          └─────┘                             │
│                          Aftercare                           │
│                          2-4 weeks                           │
│                          Full Support                        │
│                                                              │
│              [GET STARTED BUTTON]                            │
│                                                              │
│  Layout: Horizontal timeline (desktop), vertical (mobile)   │
│  Icons: 60-80px circles with step number                    │
│  Text: 14-16px, centered under each step                    │
│  Arrow size: 30-40px                                        │
│  CTA: Secondary button style                                │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Design Details:**
- 5 circular icons with step numbers (60-80px)
- Arrows between steps (30-40px wide)
- Step title + description below each
- Timeline layout: Horizontal on desktop, vertical on mobile
- Background: Contrasting light color
- CTA button: Centered below timeline

---

## 6. TESTIMONIALS SECTION

```
┌──────────────────────────────────────────────────────────────┐
│  PADDING: 60px                                                │
│  Background: White                                            │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│                  WHAT CLIENTS SAY                             │
│                Trusted by 5,000+ Satisfied Clients           │
│                                                                │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────┐ │
│  │ ⭐⭐⭐⭐⭐     │ │ ⭐⭐⭐⭐⭐     │ │ ⭐⭐⭐⭐⭐ │ │
│  │                  │ │                  │ │              │ │
│  │ "Amazing work,  │ │ "Best tattoo    │ │ "Junco       │ │
│  │ Junco listened  │ │ experience I've │ │ listened to  │ │
│  │ to my vision    │ │ had. The design │ │ my vision &  │ │
│  │ and created     │ │ was perfect and │ │ created      │ │
│  │ exactly what    │ │ the execution   │ │ exactly what │ │
│  │ I wanted..."    │ │ flawless."      │ │ I imagined."  │ │
│  │                  │ │                  │ │              │ │
│  │ — Sarah M.      │ │ — James K.      │ │ — Emma T.    │ │
│  │ New York, NY    │ │ Los Angeles, CA  │ │ Austin, TX   │ │
│  │                  │ │                  │ │              │ │
│  └──────────────────┘ └──────────────────┘ └──────────────┘ │
│                                                                │
│  Layout: 3-col (desktop), 1-col (mobile)                     │
│  Card size: 350px width, auto height                         │
│  Star rating: 5 stars, gold color                            │
│  Quote: 18px italic, centered                                │
│  Name: 16px bold, gray color                                 │
│  Location: 14px, light gray                                  │
│  Gap between cards: 30px                                     │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Card-based layout: 3 columns desktop, 1 mobile
- Card size: 350px wide, flexible height
- Stars: 5-star rating (use ⭐ or gold icons)
- Quote: 18px, italic, left-aligned
- Name: 16px, bold, dark gray
- Location: 14px, light gray
- Padding inside cards: 30px
- Border: Subtle (1px light gray)

---

## 7. FAQ SECTION

```
┌──────────────────────────────────────────────────────────────┐
│  PADDING: 60px                                                │
│  Background: Light gray (#F5F5F5)                            │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│            FREQUENTLY ASKED QUESTIONS                         │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Q: What styles do you specialize in?             ▼    │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ A: I specialize in fine line designs...               │ │
│  │ [Show/hide on click]                                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Q: How much does a tattoo cost?                 ▼    │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ A: Pricing depends on size and complexity...          │ │
│  │ [Show/hide on click]                                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Q: What if I don't have a design yet?          ▼    │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ A: No problem! We'll create one together...          │ │
│  │ [Show/hide on click]                                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Q: What's the wait time?                       ▼    │ │
│  │ A: Currently booking 6-8 weeks out...                 │ │
│  │ [Show/hide on click]                                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Q: Do you do touch-ups?                        ▼    │ │
│  │ A: Yes, touch-ups within 3 months are free...       │ │
│  │ [Show/hide on click]                                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                                │
│  Layout: Accordion (expand/collapse)                         │
│  Max width: 800px, centered                                  │
│  Q font: 16px bold, black                                    │
│  A font: 15px regular, dark gray                             │
│  Expand arrow: Rotate on click                               │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Accordion style: Click to expand/collapse
- Max width: 800px (centered on page)
- Q text: 16px bold, left-aligned
- A text: 15px regular, left-aligned
- Padding: 20px inside each accordion
- Border: Light gray (1px)
- Arrow icon: Rotate 180° when expanded
- Transition: Smooth open/close animation (0.3s)

---

## 8. PRICING SECTION (Optional)

```
┌──────────────────────────────────────────────────────────────┐
│  PADDING: 60px                                                │
│  Background: White                                            │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│                      PRICING                                  │
│          Transparent costs for quality work                  │
│                                                                │
│  ┌─────────────────────────────────────────────────┐        │
│  │                                                   │        │
│  │  Custom Fine Line Tattoo                         │        │
│  │  Starting at                                     │        │
│  │  $200                                            │        │
│  │  For small designs (less than 2" x 2")          │        │
│  │                                                   │        │
│  └─────────────────────────────────────────────────┘        │
│                                                                │
│  ┌─────────────────────────────────────────────────┐        │
│  │                                                   │        │
│  │  Pricing Range                                   │        │
│  │  $300-$1,000+                                    │        │
│  │  Based on size, complexity, and placement       │        │
│  │                                                   │        │
│  └─────────────────────────────────────────────────┘        │
│                                                                │
│  ┌─────────────────────────────────────────────────┐        │
│  │                                                   │        │
│  │  Booking Details                                 │        │
│  │  Free Consultation                               │        │
│  │  50% Deposit to Secure Date                      │        │
│  │  Payment: Cash, Card, Venmo                      │        │
│  │                                                   │        │
│  └─────────────────────────────────────────────────┘        │
│                                                                │
│  Layout: 3-card grid (or stacked on mobile)                  │
│  Card styling: Light background, border                      │
│  Price text: 32px bold, gold color                           │
│  Description: 16px, centered                                 │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

---

## 9. BOOKING CTA SECTION

```
┌──────────────────────────────────────────────────────────────┐
│  PADDING: 60px                                                │
│  Background: Dark (black or dark gray)                       │
│  Text: White                                                  │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│              READY TO GET INKED?                              │
│       (32px Serif, White, center-aligned)                    │
│                                                                │
│    Limited slots available. Book your consultation           │
│           with Junco today.                                  │
│       (18px Sans-serif, Light gray, center-aligned)          │
│                                                                │
│              ┌─────────────────────────┐                      │
│              │ RESERVE YOUR SPOT        │ ← Gold, 200x50px   │
│              └─────────────────────────┘                      │
│                                                                │
│  (Or white text on dark background)                           │
│                                                                │
│  Section height: 300-400px                                   │
│  Content vertically centered                                 │
│  Button: Same style as hero CTA                              │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

---

## 10. FOOTER

```
┌──────────────────────────────────────────────────────────────┐
│  Background: Black (#000000)                                 │
│  Text: White (#FFFFFF)                                       │
│  PADDING: 40px                                                │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  │  CONTACT                                                 │ │
│  │  📞 (XXX) XXX-XXXX          ← Clicable link (tel:)     │ │
│  │  ✉️  hello@juncotattoo.com  ← Clicable link (mailto:)  │ │
│  │  📍 [Full Address]                                       │ │
│  │     [City, State ZIP]                                    │ │
│  │     [Map link]              ← Link to Google Maps      │ │
│  │                                                           │ │
│  │  FOLLOW US                                               │ │
│  │  [Instagram] [TikTok] [Facebook]  ← Icon links        │ │
│  │                                                           │ │
│  │  NEWSLETTER                                              │ │
│  │  ┌──────────────────────────────┐                       │ │
│  │  │ Enter your email...          │  [Subscribe]         │ │
│  │  └──────────────────────────────┘                       │ │
│  │                                                           │ │
│  │  © 2025 Junco Tattoo | Privacy | Terms                  │ │
│  │                                                           │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                                │
│  Layout: 4-column (Contact | Follow | Newsletter | Info)    │
│  Mobile: 1-column (stacked)                                  │
│  Font: 14-16px                                               │
│  Links: White, underline on hover                            │
│  Icons: 24-32px with hover color change                      │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

---

## COLOR PALETTE SPECIFICATION

```
PRIMARY COLORS:
├─ Black:         #000000 or #1a1a1a (backgrounds, text)
├─ White:         #FFFFFF (text on dark, backgrounds)
└─ Gold:          #D4AF37 (accents, buttons, hover states)

SECONDARY COLORS:
├─ Light Gray:    #F5F5F5 (section backgrounds)
├─ Dark Gray:     #333333 (body text)
├─ Light Border:  #EEEEEE (dividers, borders)
└─ Red (Optional): #C41E3A (for urgent CTA, only if needed)

USAGE:
├─ Headers: Black or dark gray
├─ Body text: Dark gray (#333333)
├─ Primary CTA: Gold background, white text
├─ Secondary CTA: White background, black text
├─ Links: White or gold (depend on context)
├─ Hover states: Opacity change (0.8) or darker shade
└─ Backgrounds: Alternate white & light gray (#F5F5F5)
```

---

## TYPOGRAPHY SPECIFICATION

```
HEADLINES (H1):
├─ Font: Serif (Baskerville, Garamond, Libre Baskerville)
├─ Size: 48-64px
├─ Weight: 700 (bold)
├─ Line-height: 1.2
└─ Color: #000000 or #1a1a1a

SUBHEADLINES (H2):
├─ Font: Serif
├─ Size: 32-40px
├─ Weight: 700
├─ Line-height: 1.3
└─ Color: #000000

SECTION TITLES (H3):
├─ Font: Serif or Sans-serif
├─ Size: 24-32px
├─ Weight: 600-700
└─ Color: #000000

BODY TEXT:
├─ Font: Sans-serif (Inter, Roboto, Open Sans, Helvetica)
├─ Size: 16-18px
├─ Weight: 400
├─ Line-height: 1.6
├─ Color: #333333
└─ Letter-spacing: Normal

SMALL TEXT (Labels, captions):
├─ Font: Sans-serif
├─ Size: 12-14px
├─ Weight: 400
├─ Color: #666666
└─ Line-height: 1.5

BUTTONS:
├─ Font: Sans-serif
├─ Size: 14-16px
├─ Weight: 600-700
├─ Text-transform: Uppercase (optional)
└─ Letter-spacing: 0.5px
```

---

## RESPONSIVE BREAKPOINTS

```
DESKTOP (1200px+):
├─ Portfolio: 4-column grid
├─ About: 2-column layout
├─ Testimonials: 3-card row
└─ Full header navigation

TABLET (768px - 1199px):
├─ Portfolio: 3-column grid
├─ About: 2-column layout
├─ Testimonials: 2-card row
├─ Header: Slightly compact

MOBILE (< 768px):
├─ Portfolio: 2-column grid
├─ About: 1-column layout
├─ Testimonials: 1-card (stacked)
├─ Header: Hamburger menu
├─ Hero: Reduced fonts by 30%
└─ Padding: 20px instead of 40px
```

---

## INTERACTIVE ELEMENTS

### Buttons
```
Normal state:
├─ Background: Gold (#D4AF37)
├─ Text: White (#FFFFFF)
├─ Font: 14-16px bold
└─ Padding: 12px 40px (min 44px height)

Hover state:
├─ Background: #C9A227 (darker gold)
├─ Cursor: pointer
└─ Transition: 0.3s

Active/Click state:
├─ Background: #B8951F (even darker)
├─ Transform: scale(0.98)
└─ Transition: 0.1s
```

### Links
```
Normal: 
├─ Color: #000000 or #FFFFFF (context-dependent)
└─ Text-decoration: none

Hover:
├─ Color: #D4AF37
├─ Text-decoration: underline
└─ Transition: 0.2s
```

### Form Inputs
```
Input fields:
├─ Border: 1px solid #EEEEEE
├─ Padding: 12px 16px
├─ Font: 16px (prevents zoom on mobile)
├─ Border-radius: 4px
└─ Focus: Border #D4AF37, outline none

Focus state:
├─ Border: 2px solid #D4AF37
├─ Box-shadow: none
└─ Transition: 0.2s
```

---

## SPACING GUIDE

```
Padding/Margin scale:

Section padding:    60px (top/bottom), 40px (left/right)
Card padding:       30px
Gap between items:  20-30px
Line height:        1.5-1.8 (body), 1.2-1.3 (headings)

Mobile adjustments:
├─ Section padding: 40px (top/bottom), 20px (left/right)
├─ Card padding:    20px
├─ Gap between:     15-20px
└─ Heading spacing: Keep same line-height
```

---

## FINAL CHECKLIST FOR DESIGNER

```
□ All fonts properly imported (Google Fonts or Typekit)
□ Contrast ratio tested (WCAG AA minimum 4.5:1)
□ All buttons 44px minimum height on mobile
□ Images optimized (<200KB per image)
□ All links have hover states
□ Forms properly labeled
□ Mobile viewports tested (iPhone, Android)
□ Sticky header works smoothly
□ Infinite scroll/Load More working
□ Lightbox opens/closes smoothly
□ Accordion expand/collapse works
□ Newsletter form working
□ All external links target="_blank"
□ Meta tags updated for each page
□ Favicon set
□ 404 page designed
□ Loading states for images/forms
□ Accessibility: Alt text on all images
□ Accessibility: Keyboard navigation works
□ Accessibility: Color not only method of info
```

