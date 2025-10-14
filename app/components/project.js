export default function Project(){
    return (
        <div id="projects">
            <h2 className="text-4xl pt-8 pb-4 font-bold">Projects</h2>
            <div className="grid grid-cols-2 gap-12">
                <div className="rounded-xl">
                    <h3 className="text-2xl font-semibold pb-4">Pokemon codex dataset</h3>
                    <image src="" alt="Project1 display" className="rounded-xl pb-2" width={400} height={300} />
                    <p className="pt-4 pb-2">Description</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="rounded-xl">
                    <h3 className="text-2xl font-semibold pb-4"></h3>
                    <Image src="" alt="T.A.R.S." className="rounded-xl pb-2" width={400} height={300} />
                    <p className="pt-4 pb-2">Project description</p>
                    <a href="#">Learn More</a>
                    
            </div>
            <div className="rounded-xl">
                <h3 className="text-2xl font-semibold pb-4">Project3</h3>
                <Image src="" alt="Project 3" className="rounded-xl pb-2" width={400} height={300} />
                <p className="pt-4 pb-2">Project 3 Description</p>
                <a href="#">Learn More</a>

            </div>
        </div>

     </div>
        

    )
}