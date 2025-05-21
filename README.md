# Atharva Patil - Portfolio Website

A modern, animated, and interactive portfolio website showcasing Atharva Patil's skills, experiences, and projects. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern and responsive design that works across all devices
- Interactive animations and transitions powered by Framer Motion
- Dynamic typing animation in the hero section
- Smooth scrolling navigation
- Light/dark theme toggle with system preference detection
- Animated background particles
- Project filtering by category
- Contact form with validation
- Video background in hero section

## Project Structure

The project is organized into the following structure:

```
src/
├── assets/          # Contains static assets like favicon
├── components/      # Reusable UI components
├── contexts/        # React context providers
├── App.tsx          # Main application component
├── index.css        # Global styles
└── main.tsx         # Application entry point
```

## Component Breakdown

### Main Components

- `App.tsx`: The root component that assembles all sections
- `Header.tsx`: Navigation header with theme toggle
- `Hero.tsx`: Landing section with video background and typing animation
- `About.tsx`: Personal information and introduction
- `Skills.tsx`: Technical skills visualization
- `Experience.tsx`: Timeline of co-curricular activities
- `Projects.tsx`: Showcase of personal projects with filtering
- `Contact.tsx`: Contact form and information
- `Footer.tsx`: Website footer

### Supporting Components

- `BackgroundParticles.tsx`: Canvas-based animated background
- `ScrollToTop.tsx`: Button to scroll back to top of page
- `ThemeContext.tsx`: Context provider for light/dark theme toggle

## How to Modify Content

### Updating Personal Information

To update the personal information, modify the content in these files:

- `Hero.tsx`: Update the name, titles in the typing animation, and brief intro
- `About.tsx`: Update the detailed description and education information
- `Contact.tsx`: Update contact information and social media links

### Modifying Skills

Skills are defined in the `Skills.tsx` file. To update:

1. Find the `skills` array in the file
2. Add, remove, or modify the skills objects with the format:
   ```typescript
   { 
     name: 'Skill Name', 
     level: 85, // percentage of proficiency
     category: 'Category', 
     icon: <Icon size={24} />
   }
   ```

### Updating Projects

Projects are defined in the `Projects.tsx` file. To update:

1. Find the `projects` array in the file
2. Add, remove, or modify project objects with the format:
   ```typescript
   {
     title: 'Project Title',
     duration: 'MM/YYYY - MM/YYYY',
     description: 'Project description...',
     technologies: ['Tech1', 'Tech2', 'Tech3'],
     imageSrc: 'https://example.com/image.jpg',
     category: 'Current'|'Past'
   }
   ```

### Updating Experience Timeline

The experience timeline is in the `Experience.tsx` file. To update:

1. Find the `timelineEvents` array in the file
2. Add, remove, or modify timeline event objects with the format:
   ```typescript
   {
     title: 'Position Title',
     organization: 'Organization Name',
     duration: 'MM/YYYY - Present',
     description: [
       'Responsibility 1',
       'Responsibility 2',
       'Responsibility 3'
     ],
     icon: <Icon className="h-6 w-6 text-white" />
   }
   ```

## Styling and Theming

The website uses Tailwind CSS for styling with a custom color scheme defined in `tailwind.config.js`. 

To modify the theme colors:
1. Open `tailwind.config.js`
2. Update the color values in the `colors` section of the theme extension

The dark/light mode toggle is handled by the `ThemeContext` provider in `src/contexts/ThemeContext.tsx`.

## Background Video & Animations

### Video Background

The video background is embedded in the `Hero.tsx` component. To change it:

1. Update the `src` attribute in the video element to point to your video file or URL
2. Make sure the video is appropriate for looping (seamless start/end)

### Background Particles

The animated background particles are implemented in `BackgroundParticles.tsx` using HTML Canvas. 
To modify the particle animation:

1. Change the `particleCount` to adjust the number of particles
2. Modify the `colors` array to change particle colors
3. Adjust `maxDistance` to change how far particles can connect with lines
4. Change speed factors to adjust how quickly particles move

## Dependencies

- React & React DOM
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Type Animation (typing effect)
- React Intersection Observer (scroll animations)
- Lucide React (icons)

## Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`