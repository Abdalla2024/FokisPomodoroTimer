# PomodoroBird Website

A beautiful landing page for the PomodoroBird iOS app - a Pomodoro timer that helps you focus while collecting adorable birds.

## Features

- **React + Vite** - Fast development and optimized builds
- **TailwindCSS** - Modern styling with utility classes
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Engaging user experience
- **Bird Collection Showcase** - Interactive bird gallery
- **App Store Integration** - Direct download links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Features.jsx    # App features showcase
│   ├── BirdCollection.jsx # Bird collection gallery
│   ├── Screenshots.jsx # App screenshots
│   ├── Download.jsx    # Download section
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- `bird-blue`: #4F9CF9
- `bird-green`: #00B884
- `bird-orange`: #FF8A3D
- `bird-purple`: #8B5CF6

### Content

Update the content in each component file to match your app's specific features and information.

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## About PomodoroBird

PomodoroBird is an iOS app that combines the proven Pomodoro Technique with delightful gamification. Users complete focus sessions to collect beautiful birds, making productivity both effective and enjoyable.

**App Features:**
- Focus Timer with customizable intervals
- Task Manager for daily planning
- Analytics to track productivity patterns
- Settings for personalization
- Bird Collection with 50+ species

## License

This project is licensed under the MIT License.