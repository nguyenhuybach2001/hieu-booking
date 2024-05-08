import Search from "@/components/search";

export default function Home() {
  return (
    <div className="bg-[url('/images/image.png')] bg-cover">
      <div className="max-w-6xl text-white w-full mx-auto px-12 ">
        Content
        <Search />
      </div>
    </div>
  );
}
