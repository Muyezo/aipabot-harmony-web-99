import { Card } from "@/components/ui/card";

interface AIInteraction {
  prompt: string;
  response: string;
  created_at: string;
  model: string;
  tokens_used: number;
}

interface AIInteractionsListProps {
  interactions: AIInteraction[];
}

const AIInteractionsList = ({ interactions }: AIInteractionsListProps) => {
  return (
    <>
      <h3 className="text-xl font-semibold text-white mb-4">
        Recent AI Interactions
      </h3>
      <div className="space-y-4">
        {interactions.map((interaction, index) => (
          <Card
            key={`${interaction.created_at}-${index}`}
            className="w-full p-6 bg-[#1A1F2C]/80 backdrop-blur-lg border-white/10"
          >
            <div className="space-y-2">
              <p className="text-white/60 text-sm">
                {new Date(interaction.created_at).toLocaleDateString()}
              </p>
              <p className="text-white font-medium">
                Prompt: {interaction.prompt}
              </p>
              <p className="text-white/80">Response: {interaction.response}</p>
              <div className="flex justify-between text-sm text-white/60">
                <span>Model: {interaction.model}</span>
                <span>Tokens: {interaction.tokens_used}</span>
              </div>
            </div>
          </Card>
        ))}
        {interactions.length === 0 && (
          <p className="text-white/60 text-center py-8">
            No AI interactions yet. Try asking a question above!
          </p>
        )}
      </div>
    </>
  );
};

export default AIInteractionsList;