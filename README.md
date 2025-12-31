# Frontend Developer Assignment

## Overview

This is a take-home assignment to assess your frontend development skills. You'll be working with a simple "webshop" application that has a product list and a shopping basket.

**Time expectation:** 2-3 hours (don't spend more than this!)

**Stack:** Vue 3, PrimeVue, TailwindCSS, Vite

---

## Getting Started

### Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org/))

### Setup
```bash
npm install
npm run dev
```

Then open http://localhost:8081 in your browser.

---

## Tasks

Complete as many tasks as you can. They are ordered by difficulty.

### Part 1: Basic Tasks (Required)

#### Task 1: Reorder Components
Move the **Basket** card so it appears **below** the Products list instead of above it.

#### Task 2: Empty State
When the basket is empty, display the message **"Your basket is empty"** instead of showing an empty table.

#### Task 3: Visual Feedback
Make the **total price** text turn **red** when it exceeds **50.00**.

#### Task 4: Remove Items
Add a **"Remove"** button to each row in the basket table. Clicking it should remove that product from the basket entirely.

---

### Part 2: Intermediate Tasks (Choose at least one)

#### Task 5: Quantity Controls
Replace the single "Add" button with **increment (+) and decrement (-)** buttons. The basket should update accordingly. Ensure quantity cannot go below 0.

#### Task 6: Persist Basket
Save the basket to **localStorage** so it persists across page refreshes.

#### Task 7: Visual Redesign 🎨
The current design is functional but bland. **Redesign the page** to make it visually appealing and professional.

You have creative freedom, but consider:
- A cohesive **color scheme** and **typography**
- Better **visual hierarchy** (make important elements stand out)
- **Hover states** and **micro-interactions** for buttons
- **Card styling** improvements (shadows, borders, spacing)
- A **header/navbar** with a logo or store name
- Making the basket feel more like a real shopping cart

You may use:
- Custom CSS / TailwindCSS utilities
- PrimeVue components and theming
- FontAwesome icons (already configured)
- CSS animations/transitions

**Evaluation:** We're looking for attention to detail, visual consistency, and a design that feels intentional rather than default.

---

### Part 3: Advanced Tasks (Bonus)

#### Task 8: API Integration
Instead of using the hardcoded product list, fetch products from this public API:

```
GET https://fakestoreapi.com/products?limit=8
```

The API returns products in this format:
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 109.95,
  "image": "https://..."
}
```

- Display the product image as a thumbnail in the table
- Handle loading and error states appropriately
- Show a loading spinner while fetching

**Hint:** PrimeVue has a `ProgressSpinner` component you can import for loading states.

#### Task 9: Unit Testing
Add unit tests for the basket functionality using [Vitest](https://vitest.dev/):

1. Set up Vitest in the project
2. Write tests that verify:
   - Adding a product to an empty basket
   - Adding the same product twice increases quantity
   - Removing a product from the basket
   - Total price calculation is correct

---

## Evaluation Criteria

| Criteria | What We're Looking For |
|----------|------------------------|
| **Correctness** | Does it work as specified? |
| **Code Quality** | Clean, readable, follows Vue 3 best practices |
| **Component Design** | Proper use of props, events, computed properties |
| **CSS/Styling** | Appropriate use of TailwindCSS utilities, PrimeVue theming |
| **Edge Cases** | Handles empty states, invalid input, loading states |
| **Git Usage** | Meaningful commit messages, logical commit history |

### Bonus Points
- TypeScript usage
- Accessibility considerations (keyboard navigation, ARIA labels)
- Responsive design
- Error boundaries / graceful error handling
- Code comments explaining complex logic

---

## Submission

Please submit:

1. **Your code** - Either a zip file or a link to a Git repository
2. **A brief write-up** (SOLUTION.md) explaining:
   - Which tasks you completed
   - Any design decisions or trade-offs you made
   - What you would improve with more time
   - Approximate time spent

---

## Project Structure

```
assignment/
├── index.html              # HTML entry point (Vite)
├── src/
│   ├── main.js             # Vue app initialization with PrimeVue
│   ├── App.vue             # Root component
│   ├── assets/
│   │   └── main.css        # TailwindCSS imports
│   └── components/
│       ├── FrontPage.vue   # Main page component (products + basket)
│       └── BasketSmall.vue # Basket component
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
└── README.md               # This file
```

---

## Tech Stack Reference

This assignment uses the same technologies as our production applications:

- **[Vue 3](https://vuejs.org/guide/introduction.html)** - Progressive JavaScript framework
- **[PrimeVue](https://primevue.org/)** - UI component library (components are registered with `Pv` prefix)
- **[TailwindCSS](https://tailwindcss.com/docs)** - Utility-first CSS framework
- **[Vite](https://vite.dev/guide/)** - Next-generation frontend tooling
- **[FontAwesome](https://fontawesome.com/icons)** - Icon library

### PrimeVue Components Used
- `PvCard` - Card container
- `PvDataTable` - Data table
- `PvColumn` - Table column
- `PvButton` - Button

### Example Usage
```vue
<PvButton label="Click me" @click="handleClick" />

<PvDataTable :value="items">
  <PvColumn field="name" header="Name" />
</PvDataTable>
```

---

Good luck! We look forward to reviewing your solution.
