# Slider Resume Generator

This web application lets users generate a beautiful slider-style resume by entering their details and previewing the result. The resume can be downloaded as a PDF (feature coming soon).

## Features

- Photo upload
- Name, Designation, Total Experience
- Email address, Mobile number
- Add multiple experiences (Job title, Company, Dates, Job Description)
- Skills (comma separated)
- Education details (School name, Grade, Percentage)
- Optional college details (College name, Degree, Stream, Percentage)
- Choose template (preview from thumbnail.png)
- Generate slider resume preview
- Download as PDF (coming soon)

## File Structure

```
.
├── index.html      # Main web app
├── style.css       # Styles for form, slider, and preview
├── script.js       # JS for form logic, preview, and PDF
├── thumbnail.png   # Resume template preview
└── README.md       # This file
```

## How to Use

1. Open `index.html` in your browser.
2. Fill out the form with your details.
3. Add experiences and college details as needed.
4. Click "Generate Preview" to see your slider resume.
5. Click "Download as PDF" to save your resume (feature coming soon).

## Customization

- Edit `style.css` to change colors, fonts, or layout.
- Replace `thumbnail.png` with your own template preview.
- Extend `script.js` to add more features or improve PDF export.

## License

MIT
# Personal Portfolio Website

This is a clean, modern, and responsive personal portfolio website built with HTML, CSS, and JavaScript. It features a dark theme and smooth scrolling.

## Features

-   **About Me**: A section to introduce yourself.
-   **Projects**: A grid to showcase your work.
-   **Skills**: A list to highlight your technical skills.
-   **Resume**: A button to download your resume PDF.
-   **Contact**: Links to your email and social profiles.
-   **Responsive Design**: Looks great on all devices.
-   **Smooth Scrolling**: For a better user experience.

## File Structure

```
.
├── index.html      # The main HTML file
├── style.css       # All the styles for the portfolio
├── script.js       # JavaScript for interactivity
├── resume.pdf      # Your resume file
└── README.md       # This file
```

## How to Customize

1.  **`index.html`**:
    *   Change the title in the `<title>` tag.
    *   Update the text in the "About Me", "Projects", "Skills", and "Contact" sections with your own information.
    *   Replace placeholder links (`#`, `https://github.com/yourusername`, etc.) with your actual project and profile links.
    *   Replace the placeholder profile picture (`https://via.placeholder.com/150`) with a link to your own photo. You can add your photo to the project folder and link to it locally (e.g., `<img src="profile.jpg" ...>`).
    *   Replace the hero background image by changing the URL in the inline style in `style.css` for the `#hero` section.

2.  **`resume.pdf`**:
    *   Place your resume file in the project folder and name it `resume.pdf`. Make sure the filename matches what's in the `href` of the download button in `index.html`.

3.  **`style.css`**:
    *   You can change the color scheme by modifying the CSS variables at the top of the file (`:root` section).

## How to Deploy to GitHub Pages

You can host this website for free using GitHub Pages.

1.  **Navigate to your project folder**:
    *   Open your terminal or command prompt and navigate into the `personal_portfolio` directory. All subsequent `git` commands should be run from here.
    ```bash
    cd path/to/your/project/personal_portfolio
    ```

2.  **Create a GitHub Repository**:
    *   Create a new public repository on GitHub. A good name for it is `your-username.github.io`. If you use this name, your site will be available at `https://your-username.github.io`. If you use another name, say `my-portfolio`, it will be at `https://your-username.github.io/my-portfolio/`.

3.  **Push Your Code**:
    *   Add your local project files to this new repository and push them.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/your-username/your-repository-name.git
    git push -u origin main
    ```
    (Replace `your-username` and `your-repository-name` with your actual details).

4.  **Enable GitHub Pages**:
    *   Go to your repository's **Settings** tab on GitHub.
    *   In the left sidebar, click on **Pages**.
    *   Under "Build and deployment", for the **Source**, select **Deploy from a branch**.
    *   For the **Branch**, select `main` and `/ (root)`, then click **Save**.
    *   GitHub will build and deploy your site. It might take a few minutes. You'll see the URL for your live site on this same page once it's ready.

That's it! Your portfolio is now live.