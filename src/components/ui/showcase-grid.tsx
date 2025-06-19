import { useState } from "react";
import { Card, CardContent } from "./card";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { ScrollArea } from "./scroll-area";

type Asset = {
  type: "video" | "image";
  src: string;
  title: string;
  description: string;
};

const assets: Asset[] = [
  {
    type: "video",
    src: "/Assets/homepage.mp4",
    title: "Homepage Animation",
    description: "Main landing page animation sequence"
  },
  {
    type: "image",
    src: "/Assets/graph.png",
    title: "Analytics Graph",
    description: "Data visualization component"
  },
  {
    type: "image",
    src: "/Assets/stats.png",
    title: "Statistics Display",
    description: "Key metrics and statistics layout"
  },
  {
    type: "image",
    src: "/Assets/cards.png",
    title: "Card Components",
    description: "Reusable card design elements"
  },
  {
    type: "video",
    src: "/Assets/loader.mp4",
    title: "Loading Animation",
    description: "Custom loader animation"
  },
  {
    type: "video",
    src: "/Assets/parallax animation.mp4",
    title: "Parallax Effect",
    description: "Smooth parallax scrolling animation"
  }
];

export function ShowcaseGrid() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Design Assets Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  {asset.type === "video" ? (
                    <video
                      className="w-full h-48 object-cover rounded-md"
                      src={asset.src}
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                  ) : (
                    <img
                      src={asset.src}
                      alt={asset.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )}
                  <h3 className="mt-4 text-lg font-semibold">{asset.title}</h3>
                  <p className="text-sm text-gray-500">{asset.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <ScrollArea className="max-h-[80vh]">
                {asset.type === "video" ? (
                  <video
                    className="w-full rounded-lg"
                    src={asset.src}
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={asset.src}
                    alt={asset.title}
                    className="w-full rounded-lg"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-2xl font-bold">{asset.title}</h2>
                  <p className="mt-2 text-gray-600">{asset.description}</p>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
} 