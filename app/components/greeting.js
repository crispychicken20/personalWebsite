import image from 'next/image'

export default function Greeting(){
    return (
        <div className="text-5xl font-bold text-center items-center justify center gap-8 px-48 py-12">
            <h1 className="text-5xl font-bold pt-4 pb-8 justify-center items-center align-center">
                Aspiring data analylist
            </h1>
            <div>
            <img src="/portrait.jpg" alt="Portrait of me" width={405} height={600}></img>
            </div>
           
        </div>
    )
}