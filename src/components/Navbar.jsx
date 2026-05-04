"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/SummerSale.jpg"}
            alt="logo"
            width={60}
            height={60}
            className="rounded-md"
          />
          <h3 className="font-bold text-lg">SummerCart</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/all-carts">Products</NavLink>
          </li>
          <li>
            <NavLink href="/profile">My Profile</NavLink>
          </li>
        </ul>

        {/* Right Side  */}
        <div className="hidden md:flex gap-4 items-center">
          {!user && (
            <>
              <Link href="/signup">SignUp</Link>
              <Link href="/signin">SignIn</Link>
            </>
          )}

          {user && (
            <div className="flex gap-3 items-center">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                size="sm"
                className="bg-red-500 text-white"
              >
                Log out
              </Button>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>


      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm">
          <Link href="/" className="block">Home</Link>
          <Link href="/all-carts" className="block">Products</Link>
          <Link href="/profile" className="block">My Profile</Link>

          <div className="border-t pt-3 space-y-2">
            {!user && (
              <>
                <Link href="/signup" className="block">SignUp</Link>
                <Link href="/signin" className="block">SignIn</Link>
              </>
            )}

            {user && (
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <Button
                  onClick={handleSignOut}
                  size="sm"
                  className="bg-red-500 text-white"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;