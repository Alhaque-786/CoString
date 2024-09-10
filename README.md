Swap App
This is a simple swap application built using Next.js with Tailwind CSS. The application includes multiple pages such as Swap, Bridge, Pools, and Products with a clean and user-friendly interface.

Features
Header Navigation: Navigate between different sections such as Swap, Bridge, Pools, and Products.
Swap Page: A functional swapping interface between ETH and other tokens (e.g., MATIC).
Bridge Page: Allows users to move tokens across different blockchains.
Responsive Design: Built with Tailwind CSS for a fully responsive layout.
Primary Text Color: All primary text is black, per the project's specifications.
Prerequisites
Before you begin, ensure you have installed:

Node.js (version 14 or higher)
npm (Node Package Manager) or yarn
Getting Started
Follow these steps to get the project up and running:

Clone the Repository

bash
Copy code
git clone https://github.com/your-username/swap-app.git
cd swap-app
Install Dependencies

If you're using npm, run:

bash
Copy code
npm install
Or if you're using yarn, run:

bash
Copy code
yarn install
Run the Application

To start the development server, run:

bash
Copy code
npm run dev
Or with yarn:

bash
Copy code
yarn dev
Open the App

Open your browser and go to:

arduino
Copy code
http://localhost:3000
You should see the Swap app interface.

Folder Structure
The project follows a standard Next.js structure:

graphql
Copy code
swap-app/
├── public/           # Static assets like images and fonts
├── src/              # Main source folder
│   ├── app/          # Next.js pages (App Router)
│   │   ├── swap/     # Swap page components
│   │   ├── bridge/   # Bridge page components
│   │   ├── pools/    # Pools page components
│   │   ├── products/ # Products page components
│   ├── components/   # Reusable components like Header, Footer, etc.
│   └── styles/       # Global CSS and Tailwind configurations
└── README.md         # Project documentation