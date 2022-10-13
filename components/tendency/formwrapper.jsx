
export function FormWrapper({ title, children }) {
  return (
    <div className="container px-5 py-12 mx-auto">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-center ">
        {title}
      </h2>
      <div className="flex items-center flex-wrap ">
        {children}
      </div>
    </div>
  )
}