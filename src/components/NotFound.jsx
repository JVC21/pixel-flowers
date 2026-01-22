function NotFound({ title, message, icon, children }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {icon && <div className="text-6xl md:text-7xl xl:text-8xl mb-6 transition-all duration-300">{icon}</div>}
            {title && <h1 className="outfit-regular text-neutral-400 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 transition-all duration-300">{title}</h1>}
            {message && <p className="outfit-regular text-neutral-500 mb-4">{message}</p>}
            {children}
        </div>
    )
}

export default NotFound;