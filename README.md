ComicVerse – Static Online Comic Store

A fully client-side comic store simulation built using HTML, CSS, and modern JavaScript.
No backend, no frameworks, no build tools.
All data and interactions run entirely in the browser.

Project Overview

ComicVerse replicates the front-end behavior of a real comic-book e-commerce site:

Multi-page structure

Dynamic comic listings

Detail page with URL parameter routing

Client-side filtering and sorting

LocalStorage-based shopping cart

Responsive layout

Monochrome grey/black/white UI

Everything is static and deployable directly on GitHub Pages.

Features
1. Homepage

Custom JavaScript carousel

Featured comics

New Releases and Popular sections

Sticky navigation bar

2. Browse Page

Full catalog grid

Filters: publisher, genre

Search by title/characters

Sorting: price, title, release date

Fully client-side rendering

3. Comic Detail Page

Dynamic content loaded via ?id=XYZ

Full metadata: title, synopsis, creators

Large cover display

Add to Cart button

4. Shopping Cart

Add / remove items

Quantity updates

Real-time total price

Persistent cart using LocalStorage

Simulated checkout

Tech Stack

HTML5 – Structure

CSS3 – Custom UI, responsive layout

JavaScript (ES6+) – Data rendering, events, cart logic

LocalStorage – Persistent cart

GitHub Pages – Deployment

No external frameworks, no APIs, no backend.

How Data Works

All comic data is defined in comics.js:

id

title

series

characters

genre

publisher

price

release date

synopsis

Cover image path

Pages import this file and render UI dynamically.

How the Cart Works

Cart is a simple object stored in LocalStorage:

{
  "m001": { id: "m001", q: 2 },
  "m010": { id: "m010", q: 1 }
}


JavaScript updates quantities, removes items, and calculates totals.

How to Run Locally

Clone the repo:

git clone https://github.com/CORNYBUG2/ComicVerse.git


Open index.html in a browser.
No server required.

Deployment (GitHub Pages)

Push the project to the main branch.

Go to: Repository → Settings → Pages

Select:

Source: Deploy from branch

Branch: main

Folder: /root

Your site will be live at:

https://cornybug2.github.io/ComicVerse/

Future Improvements

Backend with a real database

User authentication

Real payment integration

Pagination

Wishlist system

Search autocomplete

Admin panel for comic management

If you want a shorter README, a one-page version, or badges, ask.
