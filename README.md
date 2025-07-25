# Admin Dashboard

A professional React-based admin dashboard designed for internal support and monitoring.

## Features

- Overview page with system status and recent incident summary
- Ticketing system with visual status indicators
- Sidebar navigation with links to all key sections
- Users and Settings pages included
- Responsive design using Tailwind CSS
- Mock backend powered by JSON Server

## Getting Started

1. Clone the repository:
   \\\
   git clone https://github.com/milanmorton711/admin-dashboard.git
   cd admin-dashboard
   \\\

2. Install dependencies:
   \\\
   npm install
   \\\

3. Start the JSON server (in a separate terminal):
   \\\
   npx json-server --watch db.json --port 3001
   \\\

4. Start the React development server:
   \\\
   npm run dev
   \\\

## Folder Structure

- /src/pages: Contains all route pages (Overview, Tickets, Users, Settings)
- /src/components: Contains shared UI components (if any)
- db.json: Mock backend for tickets and data

## Deployment

This app is ready to be deployed to GitHub Pages, Vercel, Netlify, or any static hosting platform.

## Notes

- No login is required; the dashboard loads by default
- All data is mock/demo only

