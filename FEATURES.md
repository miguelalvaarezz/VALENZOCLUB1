# ✨ VALENZO CLUB - Features Documentation

## 🎨 Design System

### Color Palette
- **Background Dark**: `hsl(230, 20%, 6%)` - Deep night blue-black
- **Blue Primary**: `hsl(217, 90%, 60%)` - Electric cyan-blue
- **Blue Glow**: `hsl(217, 100%, 70%)` - Brilliant blue for glows
- **Accent**: `hsl(240, 100%, 98%)` - Almost white for contrast

### Typography
- **Primary Font**: Inter (Sans-serif)
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
  - Used for: Body text, UI elements, navigation

- **Secondary Font**: Merriweather (Serif)
  - Weight: 400 (Regular)
  - Used for: Headings, quotes, dramatic text

### Animations

#### Custom Keyframes (tailwind.config.ts)
1. **fade-in**: Opacity transition 0 → 1
2. **slide-up**: Translate Y + opacity transition
3. **glow**: Pulsing box-shadow effect
4. **floating**: Y-axis oscillation
5. **pulse-glow**: Expanding ring effect

#### Framer Motion Animations
- **Hero**: Staggered text appearance with fade + slide
- **Background**: Floating circles (20s duration loop)
- **Cards**: Scale on hover
- **Navbar**: Slide down on mount
- **Footer**: Staggered appearance

### Visual Effects

#### Glass Effect (glass-effect)
```css
backdrop-blur-sm bg-black/20 border border-white/10
```
- Used for: Navbar, cards, modals, forms

#### Gradient Text (gradient-text)
```css
bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text
```
- Used for: Brand name, headings, prices

#### Hover Glow (hover-glow)
```css
transition-shadow duration-300
:hover { box-shadow: 0 0 20px hsl(217, 100%, 70%) }
```
- Used for: Buttons, interactive elements

#### Glow Border (glow-border)
```css
border border-blue-600/30 hover:border-blue-400/50
```
- Used for: Cards, forms, containers

---

## 🧩 Component Architecture

### Base Components (`/components/ui`)

#### Button
- Variants: default, outline, ghost, glow
- Sizes: sm, default, lg, icon
- Features: Magnetic hover, pulse animation (glow variant)

#### Card
- Sub-components: Header, Title, Description, Content, Footer
- Features: Glass effect, glow border on hover

#### Input & Textarea
- Features: Glass effect, blue accent border, smooth transitions
- Focus: Blue glow ring

#### Label
- Features: Clean typography, uppercase option

### Feature Components

#### Navbar
- Fixed positioning
- Desktop horizontal menu
- Mobile dropdown menu
- Smooth underline on hover
- Glass effect background

#### Hero
- Full viewport height
- Animated gradient background
- Floating circles (motion.div)
- Staggered text animation
- Scroll indicator
- CTA button with pulse glow

#### Magnetic Cursor
- Custom cursor replacement
- Outer ring + inner dot
- Smooth spring animation
- Blend mode effect

#### Footer
- 4-column grid
- Social media links
- Categorized navigation
- Staggered animations

---

## 📄 Page Structure

### Home (`/`)
1. **Navbar** (fixed)
2. **Hero Section**
   - Animated background
   - Logo & tagline
   - Primary CTA
   - Scroll indicator
3. **Footer**

### Collection (`/collection`)
1. Header with title & subtitle
2. Category filter buttons
3. Product grid (responsive 1/2/3 columns)
4. Product cards with:
   - Image hover scale
   - Glass effect
   - Category badge
   - Price in gradient text

### Events (`/events`)
1. Header
2. Event grid (2 columns)
3. Event cards with:
   - Full-bleed image
   - Gradient overlay
   - Date, location, access type
   - Hover lift effect
4. CTA section at bottom

### About (`/about`)
1. Hero quote (Merriweather serif)
2. Story section (text + image)
3. Values grid (3 columns)
4. Timeline with vertical line
5. Animated milestones

### Access (`/access`)
1. Header with subtitle
2. Application form:
   - Name (text)
   - Email (email)
   - Age (number 18-24)
   - Reason (textarea)
   - Reference (text)
3. Glass effect form styling
4. Success state after submission

---

## ⚡ Performance Optimizations

### Next.js 14 Features
- **App Router**: Modern routing with layouts
- **Server Components**: Default for better performance
- **Client Components**: Only where needed ("use client")
- **Image Optimization**: Next/Image ready

### Framer Motion
- **Layout Animations**: Shared component animations
- **whileInView**: Trigger on scroll
- **Variants**: Reusable animation sets
- **Lazy Loading**: Animations only when needed

### CSS Optimizations
- **Tailwind**: Utility-first, purged unused styles
- **Custom Properties**: CSS variables for theming
- **Animations**: GPU-accelerated transforms
- **Scroll Behavior**: Smooth scroll global

---

## 🎯 UX Patterns

### Navigation
- Smooth page transitions
- Active link highlighting
- Mobile hamburger menu
- Persistent navbar

### Feedback
- Hover states on all interactive elements
- Loading states (animations)
- Success confirmations
- Form validation feedback

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grids
- Touch-friendly targets

---

## 🔧 Technical Stack

### Core
- **React 18.3** - UI library
- **Next.js 14** - Framework
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS 3.4** - Utility framework
- **Tailwind Animate** - Animation utilities
- **Autoprefixer** - CSS compatibility

### Animations
- **Framer Motion 12.23** - Motion library

### UI Components
- **Radix UI** - Headless component primitives
- **Lucide React** - Icon library

### Utilities
- **clsx** - Conditional classes
- **tailwind-merge** - Merge Tailwind classes
- **class-variance-authority** - Component variants

---

## 🚀 Future Enhancements

### Backend Integration
- [ ] Contact form submission
- [ ] Newsletter signup
- [ ] User authentication
- [ ] Membership management

### Content Management
- [ ] CMS integration (Sanity/Contentful)
- [ ] Dynamic product catalog
- [ ] Event management system
- [ ] Blog/News section

### Advanced Features
- [ ] Shopping cart & checkout
- [ ] Payment integration (Stripe)
- [ ] Order tracking
- [ ] Wishlist functionality

### Analytics & Marketing
- [ ] Google Analytics 4
- [ ] A/B testing
- [ ] Email marketing
- [ ] Social media integration

### Performance
- [ ] Image CDN
- [ ] Caching strategy
- [ ] Service worker (PWA)
- [ ] Lighthouse optimization

---

## 📝 Code Standards

### Naming Conventions
- Components: PascalCase (e.g., `Navbar.tsx`)
- Utilities: camelCase (e.g., `cn()`)
- Constants: SCREAMING_SNAKE_CASE
- CSS classes: kebab-case (via Tailwind)

### File Structure
- App Router conventions
- Colocation of related files
- Clear separation of concerns

### Code Quality
- TypeScript strict mode
- ESLint configuration
- Next.js core web vitals

---

© 2024 VALENZO CLUB. Access the Night.

