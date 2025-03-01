import Header from './features/header'
import Footer from './features/footer'
import AboutMe from './features/about-me'

function App() {
    return (
        <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
            <div className="flex flex-col flex-wrap items-center justify-center mt-[3rem] p-3 w-full max-w-[850px] text-lg">
                <Header />
                <div className="pt-6 pl-6 pb-6">
                    <AboutMe />
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default App
