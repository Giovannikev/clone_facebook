import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const Marketplace = () => {
  const marketplaceItems = [
    { title: "Vintage Leather Sofa", price: "$450", location: "2 miles away" },
    { title: "iPhone 13 Pro", price: "$699", location: "5 miles away" },
    { title: "Mountain Bike", price: "$350", location: "3 miles away" },
    { title: "Coffee Table", price: "$120", location: "1 mile away" },
    { title: "Gaming Laptop", price: "$1200", location: "7 miles away" },
    { title: "Dining Table Set", price: "$550", location: "4 miles away" },
    { title: "Wireless Headphones", price: "$89", location: "2 miles away" },
    { title: "Electric Guitar", price: "$275", location: "6 miles away" },
  ];

  return (
    <div className="py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search Marketplace"
              className="w-[300px] pl-9 bg-white"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-white">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {marketplaceItems.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            <div className="aspect-square bg-gray-100" />
            <div className="p-3">
              <div className="font-medium">{item.price}</div>
              <div className="line-clamp-1">{item.title}</div>
              <div className="text-sm text-gray-500">{item.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
