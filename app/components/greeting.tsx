// import myPortrait from '/Users/vrchris/Desktop/personalWebsite/app/components/portraitOfMe.JPG';

export default function Greeting(){
    return (
        <>
            <div className="text-5xl font-bold text-center items-center justify center gap-8 px-48 py-12">
                <h1 id="gretting" className="text-5xl font-bold pt-4 pb-8 justify-center items-center align-center">
                    Aspiring Data Scientist
                </h1>
                <div>
                    <img src="/portraitOfMe.JPG" alt="Portrait of me" width={700} height={500}></img>
                </div>
            </div>

            <div className="flex gap-4 justify-center pt-6">
                <a href="/Chris_Resume%20.pdf" target="blank" rel="noopener noreferrer"
                    className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white
                                hover:bg-purple-700 transition-colors">
                Get in Touch

                </a>
            </div>
        </>
    )
}