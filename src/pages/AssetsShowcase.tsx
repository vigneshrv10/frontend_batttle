import { ShowcaseGrid } from "@/components/ui/showcase-grid";

export default function AssetsShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Design Assets Library</h1>
          <p className="text-muted-foreground mt-2">
            Browse through our collection of UI components, animations, and design elements
          </p>
        </header>
        <ShowcaseGrid />
      </div>
    </div>
  );
} 