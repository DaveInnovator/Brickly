export type Property = {
  id: string;
  title: string;
  price: string;
  location: string;
  img: string;
};

export const properties: Property[] = [
  {
    id: "lux-villa",
    title: "Luxury Family Villa",
    price: "$1,200,000",
    location: "Malibu, CA",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "sleek-loft",
    title: "Sleek Urban Loft",
    price: "$850,000",
    location: "Downtown, NY",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "cozy-cottage",
    title: "Cozy Cottage Retreat",
    price: "$540,000",
    location: "Asheville, NC",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "modern-box",
    title: "Modern Minimal Box",
    price: "$1,450,000",
    location: "Santa Monica, CA",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "classic-house",
    title: "Classic Suburban House",
    price: "$420,000",
    location: "Springfield",
    img: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
