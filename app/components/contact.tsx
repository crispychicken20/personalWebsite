export default function Contact(){
    return (
        <div id="contact" className="scroll-mt-20 py-12 text-center">
            <h2 className="text-4xl pb-4 font-bold text-slate-900">Get in Touch</h2>
            <p className="text-slate-600 pb-8 max-w-xl mx-auto">
                I&apos;m currently looking for data science internships and entry-level roles.
                If you&apos;re hiring or just want to talk shop, I&apos;d love to hear from you.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:cpconnect2016@yahoo.com"
                   className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white
                              hover:bg-purple-700 transition-colors">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/Christopher-perez03/"
                   target="_blank" rel="noopener noreferrer"
                   className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700
                              hover:border-purple-300 hover:text-purple-600 transition-colors">
                    LinkedIn
                </a>
                
            </div>
        </div>
    )
}