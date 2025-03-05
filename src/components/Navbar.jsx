import React, { useState } from 'react';

const navItems = [
  {
    id: 1,
    title: "Features",
  },

  {
    id: 2,
    title: "Pricing",
  },

  {
    id: 3,
    title: "Contact",
  }
];

const Navbar = () => {
  const [ open, setIsOpen ] = useState(null);

  const handleClick = () => {
    setIsOpen()
  };

  return (
    <div>

    </div>
  )
}

export default Navbar