# Sam-Devfolio

A personal portfolio built with Next.js and styled with Tailwind CSS.

## Key Features & Benefits

*   **Modern Design:** A clean and responsive design powered by Tailwind CSS.
*   **Interactive UI:** Engaging user experience with animations handled by Framer Motion.
*   **Project Showcase:** Dynamically displays GitHub projects.
*   **Contact Form:** Integrated contact form for easy communication.
*   **Dark/Light Mode:** Theme support for user preference using Next Themes.
*   **Smooth Transitions:** Uses `nextjs-toploader` for loading indicators.
*   **Fonts:** Custom fonts using `next/font/local`.

## Prerequisites & Dependencies

*   Node.js (v18 or higher)
*   npm or yarn package manager
*   A GitHub account (for fetching projects)

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/samranjithpaul/Sam-Devfolio.git
    cd Sam-Devfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Set up environment variables:**

    *   Create a `.env.local` file in the root directory.
    *   Add the following environment variables:

    ```
    #Example for handling contact form (if used backend)
    #NEXT_PUBLIC_YOUR_API_ENDPOINT=http://your-api-endpoint.com/api/contact
    ```

4.  **Run the development server:**

    ```bash
    npm run dev # or yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage Examples & API Documentation

### Fetching GitHub Projects

The `GithubProjects.jsx` component fetches projects from a GitHub repository using the GitHub API. You'll need to modify this to reflect your own profile. It's assumed the API key and repo information are already set up correctly for public repos.

```javascript
// Example code (simplified) from components/GithubProjects.jsx
//Note that this is an assumption since no api calls are directly shown in the file tree

// const fetchProjects = async () => {
//   const response = await fetch(
//     `https://api.github.com/users/{YOUR_GITHUB_USERNAME}/repos`
//   );
//   const data = await response.json();
//   // Process the data and display the projects
// };
```

### Animations

Framer Motion is used for UI animations.  Animations are defined in `app/(projects)/projects/components/Animations.js`.

```javascript
// app/(projects)/projects/components/Animations.js
export const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

export const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}
```

## Configuration Options

*   **Theme Customization:** Modify the `tailwind.config.js` file to customize the theme.
*   **Component Styling:** Adjust styles within the individual JSX components.

## Contributing Guidelines

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Commit your changes with descriptive messages.
5.  Push your changes to your fork.
6.  Submit a pull request.

## License Information

This project is licensed under an "Other" license, which typically indicates a custom license or no explicit license. Contact the repository owner (samranjithpaul) for specific licensing terms.

## Acknowledgments

*   [Next.js](https://nextjs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Framer Motion](https://www.framer.com/motion/)
*   [Next Themes](https://github.com/pacocoursey/next-themes)
*   [sonner](https://sonner.emilkowalski.com/)
*   [nextjs-toploader](https://github.com/NaimaToure/nextjs-toploader)
