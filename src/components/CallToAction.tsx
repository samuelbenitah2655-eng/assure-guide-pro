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
      window.location.href = 'tel:0970254416';
    }
  };

  return (
    <div className={`text-center px-4 md:px-0 ${className}`}>
      <div className="w-4/5 md:max-w-sm mx-auto">
        <h2 className="text-lg md:text-xl font-bold text-success uppercase tracking-wide mb-3">
          APPEL GRATUIT
        </h2>
        <div className="bg-white border-2 border-success overflow-hidden">
          <div className="py-3 px-4">
            <div className="text-3xl md:text-4xl font-bold text-success text-center">
              09 70 25 44 16
            </div>
          </div>
          <Button 
            onClick={handleCall}
            className="w-full bg-success text-success-foreground hover:bg-success/90 text-base md:text-lg font-semibold py-3 rounded-none"
          >
            CLIQUEZ POUR APPELER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;