import { Link } from "react-router-dom";

//"#8000ff"
export const Navbar = () => {
  return (
    <nav
      style={{
        width: "1000px",
        backgroundColor: "rgb(236, 13, 236)",
        // backgroundColor: "#8000ff",
        padding: "20px",
        margin: "auto",
        fontWeight: "bold",
        fontSize: "25px",
        display: "flex",
        gap: "25px",
        color: "white",
        justifyContent: "center",
      }}
    >
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/products/men">Men</Link>
      <Link to="/products/women">Women</Link>
      <Link to="/products/kids">Kids</Link>
      <Link to="/products/homedecor">Home decor</Link>
    </nav>
  );
};
