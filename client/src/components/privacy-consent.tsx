import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ConsentPreferences {
  necessary: boolean;
  advertising: boolean;
  personalization: boolean;
  analytics: boolean;
}

export default function PrivacyConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    advertising: false,
    personalization: false,
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already made consent choices
    const hasConsented = localStorage.getItem('privacy-consent');
    if (hasConsented) {
      const savedPreferences = JSON.parse(hasConsented);
      setPreferences(savedPreferences);
      setShowIcon(true); // Always show icon for users to manage preferences
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      advertising: true,
      personalization: true,
      analytics: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('privacy-consent', JSON.stringify(allAccepted));
    setIsOpen(false);
  };

  const handleDenyAll = () => {
    const onlyNecessary = {
      necessary: true,
      advertising: false,
      personalization: false,
      analytics: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('privacy-consent', JSON.stringify(onlyNecessary));
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('privacy-consent', JSON.stringify(preferences));
    setIsOpen(false);
  };

  const updatePreference = (key: keyof ConsentPreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!showIcon) return null;

  return (
    <>
      {/* Floating Cookie Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-50 hover:scale-105"
        data-testid="button-privacy-consent"
        aria-label="Privacy settings"
      >
        <Cookie className="w-4 h-4" />
      </button>

      {/* Privacy Preference Center Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-800 mb-3">
              Privacy Preference Center
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Description */}
            <p className="text-slate-600 leading-relaxed">
              When you visit websites, they may store or retrieve data in your browser. This storage is often 
              necessary for the basic functionality of the website. The storage may be used for marketing, 
              analytics, and personalization of the site, such as storing your preferences. Privacy is important 
              to us, so you have the option of disabling certain types of storage that may not be necessary for 
              the basic functioning of the website. Blocking categories may impact your experience on the website.
            </p>

            {/* Accept/Deny Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={handleDenyAll} 
                variant="outline" 
                className="flex-1"
                data-testid="button-deny-all"
              >
                Deny
              </Button>
              <Button 
                onClick={handleAcceptAll} 
                className="flex-1 bg-slate-800 hover:bg-slate-700"
                data-testid="button-accept-all"
              >
                Accept
              </Button>
            </div>

            {/* Manage Consent Preferences Section */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Manage Consent Preferences by Category
              </h3>

              {/* Necessary Cookies */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-800">Necessary</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600">Always Active</span>
                    <Switch 
                      checked={preferences.necessary} 
                      disabled 
                      data-testid="switch-necessary"
                    />
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  These items are required to enable basic website functionality.
                </p>
              </div>

              {/* Advertising */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-800">Advertising</h4>
                  <Switch 
                    checked={preferences.advertising}
                    onCheckedChange={(checked) => updatePreference('advertising', checked)}
                    data-testid="switch-advertising"
                  />
                </div>
                <p className="text-sm text-slate-600">
                  These items are used to deliver advertising that is more relevant to you and your interests. They 
                  may also be used to limit the number of times you see an advertisement and measure the 
                  effectiveness of advertising campaigns. Advertising networks usually place them with the 
                  website operator's permission.
                </p>
              </div>

              {/* Personalization */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-800">Personalization</h4>
                  <Switch 
                    checked={preferences.personalization}
                    onCheckedChange={(checked) => updatePreference('personalization', checked)}
                    data-testid="switch-personalization"
                  />
                </div>
                <p className="text-sm text-slate-600">
                  These items allow the website to remember choices you make (such as your username, 
                  language, or the region you are in) and provide enhanced, more personal features. For example, 
                  a website may provide you with local weather reports or traffic news by storing data about your 
                  current location.
                </p>
              </div>

              {/* Analytics */}
              <div className="pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-800">Analytics</h4>
                  <Switch 
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => updatePreference('analytics', checked)}
                    data-testid="switch-analytics"
                  />
                </div>
                <p className="text-sm text-slate-600">
                  These items help the website operator understand how its website performs, how visitors 
                  interact with the site, and whether there may be technical issues. This storage type usually 
                  doesn't collect information that identifies a visitor.
                </p>
              </div>
            </div>

            {/* Save Preferences Button */}
            <Button 
              onClick={handleSavePreferences}
              className="w-full bg-slate-800 hover:bg-slate-700"
              data-testid="button-save-preferences"
            >
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}