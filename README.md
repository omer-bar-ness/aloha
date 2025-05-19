# Hello Counter App

A simple Next.js application that greets the user by name and provides a counter with increment and decrement functionality.

## Features

- User can enter their name for a personalized greeting
- Counter display with increment, decrement, and reset functionality
- Responsive design that works on mobile and desktop
- Built with Next.js and React

## Prerequisites

- Node.js 18 or later
- npm or yarn
- Alternatively, a conda environment with Node.js installed

## Installation and Setup

### Using Conda (recommended for this project)

1. Create a conda environment:
```bash
conda create -n hello-counter-next python=3.9
conda activate hello-counter-next
conda install -c conda-forge nodejs=18
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

### Using npm directly

```bash
npm install
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. Enter your name in the input field to see a personalized greeting
2. Use the "Increment" button to increase the counter
3. Use the "Decrement" button to decrease the counter
4. Use the "Reset" button to set the counter back to zero

## Technologies Used

- Next.js
- React
- TypeScript
- TailwindCSS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
