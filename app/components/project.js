export default function Project(){
    return (
        <div id="projects" className="scroll-mt-20">
            <h2 className="text-4xl pt-8 pb-4 font-bold">Projects:</h2>


            <div className="grid grid-cols-2 gap-12">
                <div className="rounded-xl bg-purple-300 justify-items-center text-center py-6">
                    <h3 className="text-2xl font-semibold pb-4">Pokemon codex dataset</h3>
                    {/* <image src="" alt="Project1 display" className="rounded-xl pb-2" width={400} height={300} /> */}
                    <p className="pt-4 pb-2 px-4">Description</p>
                    <a href="#" className="font-bold text-xl hover:text-red-300 transition-colors duration-200">Learn More</a>
                </div>


                <div className="rounded-xl bg-purple-300 justify-items-center text-center py-6">
                    {/* <Image src="" alt="T.A.R.S." className="rounded-xl pb-2" width={400} height={300} /> */}
                    <h3 className="text-2xl font-semibold pb-4">T.A.R.S.</h3>
                    <p className="pt-2 pb-2 px-2">TARS is a modular, intelligent assistant system designed to emulate a personalized AI experience — 
                        starting with a simple wake word and growing into a full conversational assistant.</p>
                    <a href="#" className="font-bold text-xl hover:text-red-300 transition-colors duration-200">Learn More</a>
                    
            </div>


            <div className="rounded-xl bg-purple-300 justify-items-center text-center py-6">
                <h3 className="text-2xl font-semibold pb-4">Project3</h3>
                {/* <Image src="" alt="Project 3" className="rounded-xl pb-2" width={400} height={300} /> */}
                <p className="pt-4 pb-2 px-4">Project 3 Description</p>
                <a href="#" className="font-bold text-xl hover:text-red-300 transition-colors duration-200">Learn More</a>

            </div>
        </div>

     </div>
        

    )
}