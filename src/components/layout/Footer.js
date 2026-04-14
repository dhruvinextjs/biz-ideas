export default function Footer() {
  return (
    <footer className="w-full 
    bg-gray-100 dark:bg-[#020617] 
    text-black dark:text-gray-300 
    py-10 mt-10">

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-bold text-lg">MyBrand</h3>
          <p className="mt-2 text-sm">
            Building modern UI experiences.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Subscribe</h4>
          <input
            type="email"
            placeholder="Enter email"
            className="mt-2 w-full px-3 py-2 rounded border 
            bg-white dark:bg-gray-800"
          />
        </div>
      </div>
    </footer>
  );
}