export default function Footer() {
  return (
    <footer className="relative pb-8 mt-24 bg-gray-800">
      <div>
        <div className="pl-2 text-xs text-gray-400 transition-all bg-gray-800 xl:ml-48 md:ml-48">
          {` Copyright ⓒ ${new Date().getFullYear()} All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
