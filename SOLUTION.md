# Solution Write-Up

> Please fill out this document when submitting your solution.

## Candidate Information

- **Name:** Kavya Konuganti
- **Date:** 5/1/2026
- **Time Spent:** Around 4 hours (largely spent on understanding the framework.)

---

## Completed Tasks

Check the tasks you completed:

### Part 1: Basic Tasks
- [x] Task 1: Reorder Components (basket below products)
- [x] Task 2: Empty State message
- [x] Task 3: Red total price when > 50
- [x] Task 4: Remove button for basket items

### Part 2: Intermediate Tasks
- [x] Task 5: Quantity Controls (+/- buttons)
- [x] Task 6: Persist Basket (localStorage)
- [x] Task 7: Visual Redesign (styling/CSS)

### Part 3: Advanced Tasks
- [x] Task 8: API Integration (Fake Store API)
- [ ] Task 9: Unit Testing (Vitest)

---

## Design Decisions

**Component Structure:** I split the app into FrontPage (products table) and BasketSmall (cart display) as separate routable views. This keeps things clean and lets users focus on either browsing or managing their cart.

**State Management with Pinia:** I used Pinia for state management for the basket store. this makes easy to sync the cart across components and made the localStorage persistence automatic.

**Composables for API Logic:** The `useProducts` composable handles all the Fake Store API logic in one place. This keeps components focused on rendering while the composable handles loading states and error handling. It's also reusable if needed elsewhere.

**Edge Cases & Error Handling:**
- Quantity control won't let you go below 1 (disable-decrease flag prevents it)
- When quantity hits 0, the item auto-removes from the basket
- API failures show a user-friendly error message instead of crashing
- SSR safety check in `basketLocalStorage.ts` handles the case where localStorage doesn't exist

**Styling Approach:** Used Tailwind for most styling with PrimeVue components for tables and buttons. Kept it responsive with `md:` breakpoints so the UI works on mobile too.

---

## Challenges Encountered
- This was my first time working with Vue and PrimeVue, so there was a learning curve figuring out component lifecycle, and how to properly use composables. The Pinia integration was new to me too.
- Getting the styling right took longer than expected. PrimeVue components come with their own styling, and combining that with Tailwind classes sometimes created conflicts or unexpected spacing. I had to learn the component structure and override classes properly without breaking the default look.

## What I Would Improve

- Product view — switch from a table layout to a card layout.
- Implement search bar.
- Refine layout, hover states, and spacing.
- Review and improve naming conventions across the codebase.
---

## Additional Notes
- I would have written the unit test cases if time permitted.