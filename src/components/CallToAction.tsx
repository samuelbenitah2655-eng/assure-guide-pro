import { Button } from "@/components/ui/button";

interface CallToActionProps {
  className?: string;
  onCallClick?: () => void;
}

const CallToAction = ({ className = "", onCallClick }: CallToActionProps) => {
  const handleCall = () => {
    if (onCallClick) {
      onCallClick();
    }
    // On mobile, scroll to reassurance section
    if (window.innerWidth < 768) {
      const reassuranceSection = document.getElementById('reassurance-section');
      if (reassuranceSection) {
        reassuranceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    // Try to make a call on mobile
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = 'tel:0972190055';
    }
  };

  return (
    <div className={`text-center px-4 md:px-0 ${className}`}>
      <div className="w-4/5 md:max-w-fit mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-success uppercase tracking-wide mb-3">
          APPEL GRATUIT
        </h2>
        <div className="bg-white border-2 border-success overflow-hidden">
          <div className="py-3 px-4">
            <div className="text-2xl md:text-4xl font-bold text-success text-center whitespace-nowrap flex items-center justify-center">
              09 72 19 00 55
            </div>
          </div>
          <Button 
            onClick={handleCall}
            className="w-full bg-success text-success-foreground hover:bg-success/90 text-xs md:text-sm font-semibold py-1.5 rounded-none"
          >
            CLIQUEZ POUR APPELER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;