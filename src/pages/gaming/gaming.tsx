import { Button } from "@/components/ui/button";

const Gaming = () => {
  const games = [
    { title: "Candy Crush Saga", players: "120M players", category: "Puzzle" },
    { title: "Farmville 3", players: "85M players", category: "Simulation" },
    { title: "Words With Friends", players: "65M players", category: "Word" },
    { title: "8 Ball Pool", players: "95M players", category: "Sports" },
    { title: "Criminal Case", players: "50M players", category: "Mystery" },
    { title: "Dragon City", players: "70M players", category: "Strategy" },
    { title: "Bubble Witch Saga", players: "55M players", category: "Puzzle" },
    { title: "Poker Live", players: "40M players", category: "Card" },
  ];

  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Gaming</h1>
      </div>

      <div className="mb-6">
        <div className="flex border-b">
          <button className="px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600">
            All Games
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:bg-gray-50">
            Instant Games
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:bg-gray-50">
            Recommended
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            <div className="aspect-video bg-gray-100" />
            <div className="p-3">
              <div className="font-medium">{game.title}</div>
              <div className="text-sm text-gray-500">{game.players}</div>
              <div className="mt-1 text-xs text-gray-500">{game.category}</div>
              <Button variant="secondary" size="sm" className="w-full mt-2">
                Play Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;
