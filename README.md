# 🐦 Bird Gallery

A dynamic, responsive image gallery celebrating the beauty and diversity of birds from around the world. From the iridescent plumage of peacocks to the silent flight of owls and the powerful wingspan of eagles, each card offers a closer look at a different species — paired with a short, engaging description of its unique traits and habitat.

Built with a clean, nature-inspired design featuring sky-blue and feather-gold tones, this project showcases dynamic rendering of image data using React components.

## ✨ Features

- Responsive grid layout that adapts across desktop, tablet, and mobile
- Dynamic rendering of bird cards from a single data source (`images.js`)
- Hover animations with image zoom and card elevation
- Clean, nature-inspired color palette and typography
- Fast build and dev experience powered by Vite

## 🛠️ Built With

- **React 19** — component-based UI library
- **Vite** — next-generation frontend build tool and dev server
- **JavaScript (ES6+)** — application logic
- **CSS3** — custom styling, flexbox/grid layout, and responsive design
- **ESLint** — code quality and linting

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/bird-gallery.git
cd bird-gallery
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## 📁 Project Structure
src/
├── components/
│ └── ImageCard.jsx # Reusable card component
├── assets/ # Local image assets (optional)
├── images.js # Bird data (title, description, image)
├── App.jsx # Main gallery layout
├── App.css # Gallery styling
└── index.css # Global styles

## 📸 Adding a New Bird

Open `src/images.js` and add a new object to the array with an `id`, `image` (local import or URL), `title`, and `description`. The gallery automatically renders a new card — no other file changes needed.
