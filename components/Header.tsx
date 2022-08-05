import Link from "next/link"; 

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto" >
        <div className="flex space-x-5 items-center" >
          <Link href="">
          <img className='w-40 object-contain cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHUcdCTotRQsUsmGsw3b7I78-zvmNT5GjkQ&usqp=CAU" alt="logo" />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5" >
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="text-white bg-green-600 px-4 py-1 rounded-xl" >Follow</h3>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
          <h3>Sign in</h3>
          <h3 className="border px-4 py-1 rounded-xl border-green-600" >Get Started</h3>
        </div>
    </header>
   
  )
}

export default Header