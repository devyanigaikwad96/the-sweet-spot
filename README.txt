# The Sweet Spot — editable bakery website

## 1. Add categories and sub-products
Open `data.js` and edit `bakeCategories`.

The structure is:
CATEGORY
  -> products (sub-products)

Example:
```js
{
  name: "Brownies",
  description: "Fudgy brownies in different flavours.",
  products: [
    {
      name: "Classic Brownie",
      image: "images/classic-brownie.jpg",
      description: "Rich, fudgy chocolate brownie."
    },
    {
      name: "Nutella Brownie",
      image: "images/nutella-brownie.jpg",
      description: "Chocolate brownie with Nutella."
    }
  ]
}
```

You can have any number of categories and any number of sub-products inside each category.

## 2. Add product photos
Put the photo in the `images` folder and use the filename in `data.js`.

Example:
`image: "images/biscoff-cheesecake.jpg"`

## 3. Click/zoom images
Every product photo is clickable. It opens a large lightbox with previous/next arrows. Press Escape to close, or use left/right arrow keys.

## 4. Update offers
Change the `offer` object near the top of `data.js`. Set `active: false` to hide the Offers section.

## 5. Add Zomato URL
Replace `PASTE-YOUR-ZOMATO-URL-HERE` with your actual Zomato URL.

## 6. Pink splash design
The site uses transparent pink brush-stroke assets extracted from the supplied visiting card and places them around the hero section. They can be repositioned in `style.css` if required.

## 7. Logo
The website uses the circular logo emblem separately from the large rectangular wordmark. This keeps the logo compact and clean on the website and prevents the large wordmark from overflowing the circular area.

## 8. Free hosting
Upload the complete folder to GitHub and enable GitHub Pages from Settings -> Pages -> Deploy from branch -> main.
