
export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              About Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A passionate developer who loves to build amazing things.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl text-lg text-center space-y-6">
          <p>
            I am a front-end developer with a passion for creating beautiful and intuitive user interfaces. My expertise lies in modern web technologies, and I enjoy turning complex problems into simple, elegant solutions. I am always looking for new challenges and opportunities to grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
