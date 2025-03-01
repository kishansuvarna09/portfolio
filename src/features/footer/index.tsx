const Footer = () => {
    return (
        <div className="container mx-auto px-4 text-center p-2">
            <p className="text-gray-400">Designed & Built by Kishan Suvarna</p>
            <p className="text-gray-500 text-sm mt-2">
                © {new Date().getFullYear()} All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
