import Stepper from "../components/stepper/stepper";

export default function Home() {
  return <main className={"max-w-screen-lg mx-auto p-5 space-y-5"}>
      <img className={"h-12"} src={"https://repareo.de/assets/images/repareo.svg"} alt={"Repareo logo"}/>
      <h1 className={"text-4xl font-serif"}>Frontend coding challenge</h1>
      <p className={"font-sans"}>Get started on the component in
          <code className={"bg-gray-100 rounded-lg p-1"}>/components/stepper/stepper.tsx</code>.
          When you are done, create your own feature branch and push your changes into it.</p>
      <Stepper />
  </main>
}
