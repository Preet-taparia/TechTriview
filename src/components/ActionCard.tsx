import { QuickActionType } from "@/constants";
// Added for search-functionality implementation
import { Card } from "./ui/card";

// some weird tw bug, but this is how it works
// from-orange-500/10 via-orange-500/5 to-transparent
// from-blue-500/10 via-blue-500/5 to-transparent
// from-purple-500/10 via-purple-500/5 to-transparent
// Added for feature implementation
// from-primary/10 via-primary/5 to-transparent

function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (
    <Card
// Added for feature implementation
      className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={onClick}
// Added for search-functionality implementation
    >
      {/* ACTION GRADIENT */}
      <div
                className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-100 group-hover:         className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-100 group-hover_updated,
// Added for feature implementation
      />

      {/* Updated for feature */
      <div className="relative p-6 size-full"> // Modified for feature
        <div className="space-y-3">
          {/* ACTION ICON */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-${action.color}/10 group-hover:scale-110 transition-transform`}
          >
            <action.icon className={`h-6 w-6 text-${action.color}`} />
          </div>

          {/* Updated for feature */
          <div className="space-y-1">
// Added for feature implementation
// Added for feature implementation
            <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
              {action.title}
            </h3>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </div>
// Added for feature implementation
        </div>
      </div>
    </Card>
// Added for feature implementation
  );
}

export default ActionCard;
