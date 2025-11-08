# EZ Labs - Frontend Assignment

A responsive single-page web app built with React.js / Next.js, recreating the provided Figma home page and integrating a working contact form with real API connectivity.

## Tech Stack

React.js (Vite) / Next.js (v14+)

Tailwind CSS / CSS / SCSS

Fetch or Axios for API calls

## Features

Fully responsive across all screens

Contact form with validation (no empty fields, valid email)

API integration with success message

Clean layout with hover and transition effects

## API Details

POST: https://vernanbackend.ezlab.in/api/contact-us/
Request:

{
  "name": "Test user",
  "email": "test@gmail.com",
  "phone": "9876543210",
  "message": "This is a message"
}


Success Response (200):

{ "id": 49, "name": "Test user", "email": "test@gmail.com" }

## Setup
git clone <repo-url>
cd ezlabs-assignment
npm install
npm run dev


Open your browser at http://localhost:5173

## Highlights

Validation + loading states

“Form Submitted” success toast

Pixel-perfect and mobile-friendly UI

## Postman Dump
The API testing collection is available in:
[`/postman/contact-api.postman_collection.json`](postman/contact-api.postman_collection.json)
