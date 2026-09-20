export default function Project(){
    return (
        <div id="projects" className="scroll-mt-20">
            <h2 className="text-4xl pt-8 pb-4 font-bold text-slate-900">Projects:</h2>

            <div className="grid grid-cols-1 md;grid-cols-2 gap-8">
                <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6 text-center
                                hover:border-purple-300 hover:shadow-md transition-all duration-200">
                    <h3 className="text-2xl font-semibold text-slate-900 pb-3">Pokemon codex dataset</h3>
                    <p className="text-slate-600 pb-4">A multi-purpose menu that used various data structures
                    to gather lists of Pokemon through user selection — fastest Pokemon, filtering by type, and more.</p>
                    <a href="https://github.com/crispychicken20/PokemonCodex/tree/main" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200">Learn More</a>
                </div>
                {/* COMPLETE THE REST OF THE CARDS LIKE ABOVE */}
                <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6 text-center
                                hover:border-purple-300 hover:shadow-md transition-all duration-200">
                    <h3 className="text-2xl font-semibold text-slate-900 pb-3">T.A.R.S.</h3>
                    <p className="text-slate-600 pb-4">TARS is a modular, intelligent assistant system designed to emulate a personalized AI experience — 
                        starting with a simple wake word and growing into a full conversational assistant.</p>
                    <a href="#" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200">Learn More</a>
                </div>

                <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6 text-center
                                hover:border-purple-300 hover:shadow-md transition-all duration-200">
                    <h3 className="text-2xl font-semibold text-slate-900 pb-3">Shell-Based Data Cleaning Pipeline</h3>
                    <p className="pt-4 pb-2 px-4">An end-to-end pipeline written in pure bash — no pandas, no notebooks. Normalizes a raw
                    passenger dataset, handles missing and malformed fields, then generates a survival report
                    broken down by class, gender, and age. Built with error handling for bad input and
                    documented cleaning assumptions throughout.
                    </p>
                    <a href="#" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200">Learn More</a>
                </div>
            </div>

        </div>
    )
}