// ============================================================
// THE SWEET SPOT - EDITABLE CONTENT
// Products are organised as CATEGORY -> SUB-PRODUCTS.
// Add/remove categories or products here without changing HTML.
// ============================================================

const SITE = {
  bakeryName: "The Sweet Spot",
  tagline: "ARTISANAL PATISSERIE",
  instagramUrl: "https://www.instagram.com/thesweetspot_tss/",
  zomatoUrl: "https://zomato.onelink.me/xqzv/dirpo38l",
  whatsappNumber: "+919766733620",
  phone1: "+91 9766733620",
  phone2: "+91 8983922815",
  email: "tssthesweetspot@gmail.com",
  location: "Pune, Maharashtra",
  timings: "Pre-orders & deliveries — please contact us",

  offer: {
    active: true,
    badge: "NEW OFFER",
    title: "Something Sweet is Coming!",
    text: "Check back here for our latest cheesecake, dessert and bakery offers.",
    buttonText: "Order on WhatsApp"
  },

  // ==========================================================
  // OUR BAKES: Add a new category by copying a whole category.
  // Add a new sub-product by copying one product object.
  // ==========================================================
  bakeCategories: [
    {
      name: "Cheesecakes",
      description: "Our signature creamy, indulgent cheesecakes.",
      products: [
        {
          name: "Biscoff Cheesecake - ₹215",
          image: "images/Biscoff.svg",
          description: "Creamy cheesecake with a buttery Biscoff base."
        },
        {
          name: "Nutella Cheesecake - ₹215",
          image: "images/Nutella.svg",
          description: "Rich chocolate-hazelnut cheesecake for serious cravings."
        },
        {
          name: "Blueberry Cheesecake - ₹215",
          image: "images/Blueberry.svg",
          description: "Velvety cheesecake finished with blueberry compote."
        },
		{
          name: "Chocolate Cheesecake - ₹215",
          image: "images/Chocolate.svg",
          description: "Velvety cheesecake finished with blueberry compote."
        }
      ]
    },
    {
      name: "Cheesecakes and Cakes",
      description: "Celebration cakes, bento cakes and custom creations.",
      products: [
        {
          name: "Bento , 1/2 kg and 1 kg Biscoff Cheesecakes - ₹490|₹850|₹1650",
		  price: "₹490|₹850|₹1650",
          image: "images/Biscoff Bento.PNG",
          description: "Cute, custom  cheesecake for birthdays and little celebrations."
        },
		{
          name: "Bento , 1/2 kg and 1 kg Blueberry Cheesecakes - ₹400|₹800|₹1500",
          image: "images/Blueberry bento.PNG",
          description: "Cute, custom  cheesecake for birthdays and little celebrations."
        },
		{
          name: "Bento , 1/2 kg and 1 kg Chocolate Cheesecakes - ₹420|₹800|₹1450",
          image: "images/Chocolate Bento.PNG",
          description: "Cute, custom  cheesecake for birthdays and little celebrations."
        },
		{
          name: "Bento , 1/2 kg and 1 kg Nutella Cheesecakes - ₹480|₹900|₹1600",
          image: "images/Nutella Bento.PNG",
          description: "Cute, custom  cheesecake for birthdays and little celebrations."
        },
        {
          name: "Custom Cakes",
          image: "images/cakes.svg",
          description: "Made-to-order cakes designed around your celebration."
        }
      ]
    },
    {
      name: "Cookies and Tiramisu",
      description: "Sweet little treats for everyday cravings and gifting.",
      products: [
        {
          name: "Scoopable Cookies - Single serve : ₹180, Large : ₹320",
          image: "images/Scooapable.jpeg",
          description: "Soft, Gooey cookies with single serve portion and Large portion."
        },
		 {
          name: "NY Style Cookies",
          image: "images/NY.jpeg",
          description: "Chocolaty NY Style Cookies"
        },
		 {
          name: "Tiramisu - ₹200",
          image: "images/Tiramisu.jpeg",
          description: "Tiramisu"
        }

      ]
    }
  ]
};
