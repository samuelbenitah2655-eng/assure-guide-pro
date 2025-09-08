import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCallButton = () => {
  const handleCall = () => {
    // On mobile, try to make a call
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = 'tel:0972190055';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50">
      <Button
        onClick={handleCall}
        className="w-full bg-success text-success-foreground hover:bg-success/90 py-4 text-lg font-semibold shadow-lg"
      >
        <Phone className="w-5 h-5 mr-2" />
        Appeler maintenant
      </Button>
    </div>
  );
};

export default StickyCallButton;