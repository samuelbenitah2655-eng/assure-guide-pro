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
    <div className={`text-center ${className}`}>
      <h2 className="text-sm md:text-base font-bold text-success uppercase tracking-wide mb-4">
        APPEL GRATUIT
      </h2>
      <div className="bg-white border-2 border-success rounded-lg max-w-md mx-auto overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-success mb-3 text-center">
            09 70 25 44 16
          </div>
        </div>
        <Button 
          onClick={handleCall}
          className="w-full bg-success text-success-foreground hover:bg-success/90 text-base md:text-lg font-semibold py-3 md:py-4 rounded-none"
        >
          CLIQUEZ POUR APPELER
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;