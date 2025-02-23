# Image Search App

A TypeScript-powered image search application built with React. Users can search for high-quality images, zoom in for a detailed view, and load more images dynamically using the Unsplash API.

## Live Demo
🔗 [Image Search App](https://goit-typescript-hw-02-seven-wheat.vercel.app/)

## Features
- 🔍 **Search Images**: Retrieve high-resolution images from the Unsplash API.
- 🖼 **Image Preview**: Click on an image to zoom in.
- 🔄 **Load More Functionality**: Fetch additional images dynamically.
- 🎨 **Responsive Design**: Optimized for mobile and desktop users.
- 🛠 **Type Safety**: Built with TypeScript for improved maintainability.

## Tech Stack
- **TypeScript**
- **React (Vite-based setup)**
- **React Router** for navigation
- **Unsplash API** for image search
- **Axios** for API requests
- **CSS Modules & Flexbox** for styling
- **React Icons, React Modal** for UI components
- **React Loader Spinner** for loading indicators
- **Formik** for form management
- **React Hot Toast** for notifications

## Installation & Setup
To run this project locally, follow these steps:

1. **Clone the repository**
   ```sh
   git clone https://github.com/Valentyn-M/Image-Search_goit-typescript-hw-02.git
   cd Image-Search_goit-typescript-hw-02
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/` (or as indicated in the terminal output).

## Project Structure
```
Image-Search_goit-typescript-hw-02/
│── public/                # Static assets
│── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── pages/             # Application pages
│   ├── services/          # API services
│   ├── styles/            # Global styles
│── .gitignore
│── package.json
│── tsconfig.json          # TypeScript configuration
│── vite.config.ts
│── README.md
```

## Deployment
The app is deployed on **Vercel**:
🔗 [Live Demo](https://goit-typescript-hw-02-seven-wheat.vercel.app/)

To deploy your own version:
```sh
npm run build
vercel deploy
```

## License
This project is licensed under the MIT License.
