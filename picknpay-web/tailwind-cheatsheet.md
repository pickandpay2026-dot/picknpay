# Tailwind CSS Cheat Sheet (focused on the Picknpay showcase)

Scale reminder: spacing units are multiples of 4px (`1` = 4px, `4` = 16px, `8` = 32px).
Arbitrary values use square brackets: `w-[82%]`, `aspect-[4/5]`, `bg-[#0d0b1a]`.
Opacity shorthand: `bg-white/10` = white at 10%. `bg-white/[0.03]` = 3%.

---

## 1. Layout and display

| Class | What it does |
|---|---|
| `block`, `inline-block`, `inline-flex` | Sets the display type |
| `hidden` | Removes the element (`display: none`) |
| `flex` | Children line up in a row (flexbox) |
| `grid` | Children sit in a grid |
| `flex-col` | Flex direction becomes vertical |
| `flex-1` | Element grows to fill leftover space |
| `shrink-0` | Element never shrinks below its size (needed for carousel slides) |
| `relative` | Positioning anchor for absolute children |
| `absolute` | Positions the element relative to the nearest `relative` parent |
| `inset-0` | Top, right, bottom, left all 0 (fills the parent) |
| `bottom-0`, `top-0`, `left-0`, `right-0` | Pins to that edge |
| `sticky` | Sticks while scrolling past (used on the playground toolbar) |
| `z-10`, `-z-10` | Stacking order |
| `isolate` | Creates its own stacking context so negative z-index stays inside |
| `columns-2`, `columns-3` | CSS multi-column layout (this makes the masonry) |
| `break-inside-avoid` | Stops an item splitting across columns |
| `container`, `mx-auto` | Centers a block horizontally |

## 2. Grid and flex alignment

| Class | What it does |
|---|---|
| `grid-cols-3` | Three equal columns |
| `grid-cols-[repeat(auto-fit,minmax(260px,1fr))]` | As many columns as fit, each 260px or wider |
| `col-span-2`, `row-span-3` | Item spans multiple columns or rows |
| `auto-rows-[36px]` | Each implicit row is 36px tall |
| `grid-flow-dense` | Fills gaps in the grid |
| `gap-4`, `gap-x-2`, `gap-y-6` | Space between children |
| `items-start`, `items-center`, `items-end` | Cross-axis alignment |
| `justify-between`, `justify-center`, `justify-end` | Main-axis alignment |
| `flex-wrap` | Lets items wrap to the next line |

## 3. Sizing

| Class | What it does |
|---|---|
| `w-full`, `h-full` | 100% of the parent |
| `w-[82%]`, `w-72`, `h-[380px]` | Percentage, scale or exact size |
| `w-auto` | Natural width |
| `min-h-0` | Allows a flex child to shrink so inner scroll works |
| `max-w-5xl`, `max-w-md` | Maximum width (md = 28rem, 5xl = 64rem) |
| `aspect-square` | Width equals height |
| `aspect-[4/5]`, `aspect-[4/3]` | Custom ratio, width : height |
| `h-3 w-3` | 12px by 12px (icon size) |
| `min-h-screen` | At least the full viewport height |

## 4. Spacing (box model)

| Class | What it does |
|---|---|
| `p-4`, `px-4`, `py-10`, `pt-2`, `pb-5`, `pr-1` | Padding (all, x-axis, y-axis, one side) |
| `m-4`, `mx-auto`, `mt-6`, `mb-3`, `-mx-4` | Margin, `-` makes it negative |
| `space-y-2`, `space-x-2` | Space between children |
| `border`, `border-2`, `border-b` | Border width (all or one side) |
| `border-white/10` | Border color with opacity |
| `rounded-md`, `rounded-xl`, `rounded-2xl`, `rounded-full` | Corner radius |
| `overflow-hidden` | Clips anything sticking out (keeps image inside rounded corners) |
| `overflow-y-auto`, `overflow-x-auto` | Scrolls on that axis when needed |
| `overscroll-contain` | Stops scroll from leaking to the page behind |

## 5. Scrolling and snapping (the carousel)

| Class | What it does |
|---|---|
| `snap-x` | Horizontal scroll snapping |
| `snap-mandatory` | Always settles on a snap point |
| `snap-center`, `snap-start` | Where each child aligns when snapped |
| `scroll-px-4` | Padding for the snap position (keeps a peek of the next slide) |
| `[scrollbar-width:none]` | Hides the scrollbar in Firefox |
| `[&::-webkit-scrollbar]:hidden` | Hides the scrollbar in Chrome and Safari |
| `[scrollbar-width:thin]` | Thin scrollbar |
| `scroll-smooth` | Smooth scrolling for anchor jumps |

## 6. Typography

| Class | What it does |
|---|---|
| `text-xs`, `text-sm`, `text-3xl` | Font size |
| `text-[9px]` | Exact size |
| `font-medium`, `font-semibold`, `font-bold` | Weight |
| `uppercase` | UPPERCASE text |
| `tracking-wide`, `tracking-widest` | Letter spacing |
| `leading-tight` | Tighter line height |
| `text-white`, `text-slate-400`, `text-violet-400` | Text color |
| `text-center`, `text-left` | Alignment |
| `truncate` | Single line with an ellipsis |
| `whitespace-nowrap` | No wrapping |

## 7. Colors, backgrounds and gradients

| Class | What it does |
|---|---|
| `bg-white/[0.03]` | Almost transparent white fill |
| `bg-black/30` | 30% black |
| `bg-[#0d0b1a]` | Exact hex color |
| `bg-gradient-to-t` | Gradient direction (t, b, l, r, tr, br...) |
| `from-black/80` | Gradient start color |
| `via-black/10` | Middle color |
| `to-transparent` | End color |
| `bg-[radial-gradient(...)]` | Custom radial gradient |
| `bg-cover`, `bg-center` | Background image sizing and position |
| `object-cover` | Image fills its box, cropping the extra |
| `object-contain` | Whole image visible, may leave gaps |

## 8. Glassmorphism and effects

| Class | What it does |
|---|---|
| `backdrop-blur-md`, `-xl`, `-2xl` | Blurs what is behind the element (the frosted look) |
| `backdrop-saturate-150` | Boosts color behind the glass |
| `blur-3xl` | Blurs the element itself (good for glowing blobs) |
| `shadow-lg`, `shadow-xl` | Drop shadow |
| `shadow-[0_8px_32px_rgba(0,0,0,0.35)]` | Custom shadow |
| `opacity-50` | Element transparency |
| `[mask-image:linear-gradient(...)]` | Fades an edge to transparent (the scroll fade) |

## 9. Interaction states (prefixes)

Put a prefix before any class to apply it only in that state.

| Prefix | When it applies | Example |
|---|---|---|
| `hover:` | Mouse over | `hover:text-violet-300` |
| `focus:` | Focused element | `focus:ring-2` |
| `focus-visible:` | Keyboard focus only | `focus-visible:outline` |
| `active:` | While pressed | `active:scale-95` |
| `group` and `group-hover:` | Parent hovered affects child | `group-hover:scale-105` |
| `disabled:` | Disabled control | `disabled:opacity-50` |
| `aria-selected:` | Selected tab | `aria-selected:bg-violet-500` |

## 10. Animation

| Class | What it does |
|---|---|
| `transition`, `transition-all`, `transition-colors` | Animates changes |
| `duration-300` | 300ms |
| `ease-out` | Easing curve |
| `scale-105`, `scale-95` | Grow or shrink |
| `animate-pulse` | Loading pulse |
| `animate-spin` | Spinner rotation |

## 11. Responsive prefixes (mobile first)

Unprefixed classes apply on all sizes. Prefixed ones apply from that width **up**.

| Prefix | From width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

Example from the showcase: `flex md:grid md:grid-cols-3` means a flex row (swipe) on phones and a 3-column grid from 768px up.

## 12. Dark mode and other variants

| Prefix | Meaning |
|---|---|
| `dark:` | Applies in dark mode (`dark:bg-slate-900`) |
| `[&::-webkit-scrollbar]:` | Arbitrary selector variant |
| `first:`, `last:`, `odd:`, `even:` | Position-based styling |
| `motion-reduce:` | For users who disable animation |

## 13. Reading a real class string

```
flex aspect-square w-full shrink-0 snap-center flex-col rounded-2xl
border border-white/10 bg-white/[0.03] p-4 md:w-auto md:shrink
```

- `flex flex-col` stacks header and scroll area vertically
- `aspect-square w-full` full width, square shape
- `shrink-0 snap-center` stays full-size and snaps to center in the carousel
- `rounded-2xl border border-white/10 bg-white/[0.03] p-4` the soft card look
- `md:w-auto md:shrink` from tablet up, lets the grid control the width

## 14. Tips

- Build mobile first, then add `md:` and `lg:` overrides.
- Avoid building class names with string pieces like `` `bg-${color}-500` ``. Tailwind only sees complete class names, so write them in full or use a lookup object (like `SHAPE` in the showcase).
- Use `clsx` or `tailwind-merge` when combining conditional classes.
- Keep repeated class groups in a component (like `Panel`) instead of copying them.
- Put brand colors and custom values in `tailwind.config.js` under `theme.extend`.
- The VS Code extension "Tailwind CSS IntelliSense" shows what each class does on hover and autocompletes names.
