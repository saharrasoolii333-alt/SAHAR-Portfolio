# Sahar Rasooli — Portfolio (React + Framer Motion)

## Run it
```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
```

## Where Framer Motion is used
- **Navbar**: slides in, sliding active-link pill (`layoutId`), scroll progress bar, animated mobile menu
- **Hero**: staggered text entrance, spring avatar, floating/pulsing glow, scroll parallax, button & icon hover/tap
- **Background**: floating glow orbs
- **Section headings**: blur + slide reveal on scroll
- **About**: cards slide in from the sides, stats count up, floating fan icon
- **Education & Projects**: 3D flip cards (hover on desktop, tap on touch)
- **Experience**: timeline line draws while you scroll, alternating slide-ins, staggered bullet points
- **Skills**: staggered pop-in pills with hover lift
- **Contact**: staggered info rows, input focus scale, animated success message
- **Footer**: fade-up and icon hover

Content (text, links, images) lives in `src/data.js`. Images are in `public/images/`.

## Advanced features
- `SettingsContext.jsx` + `SettingsPanel.jsx`: gear button with 4 accent themes, cursor toggle, reduce-motion toggle (saved in localStorage)
- `CommandPalette.jsx`: press Ctrl/Cmd+K to jump to sections or switch themes
- `CustomCursor.jsx`: spring-following cursor ring
- `Typewriter.jsx`: typing effect in the hero

## Themes (from the reference boards)
Switch in the gear panel or Ctrl+K: **Noir Gold** (torn paper, brass, hanging lamps), **Soft Violet** (soft-UI), **Cream Blue**. Theme variables are at the bottom of `src/style.css`.
