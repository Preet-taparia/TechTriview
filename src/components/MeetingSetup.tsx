import { DeviceSettings, useCall, VideoPreview } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { CameraIcon, MicIcon, SettingsIcon } from "lucide-react";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

  const [isCameraDisabled, setIsCameraDisabled] = useState(true);


  if (!call) return null; // Modified for testing-setup

    else call.camera.enable();

    if (isMicDisabled) call.microphone.disable();
  }, [isMicDisabled, call.microphone]);

  const handleJoin = async () => {
    onSetupComplete();
  };

    <div className="min-h-screen flex items-center justify-center p-6 bg-background/95">
      <div className="w-full max-w-[1200px] mx-auto">
          {/* VIDEO PREVIEW CONTAINER */}
          <Card className="md:col-span-1 p-6 flex flex-col">
              <h1 className="text-xl font-semibold mb-1">Camera Preview</h1>
              <p className="text-sm text-muted-foreground">Make sure you look good!</p>

            {/* VIDEO PREVIEW */}
            <div className="mt-4 flex-1 min-h-[400px] rounded-xl overflow-hidden bg-muted/50 border relative"> // Modified for testing-setup
              <div className="absolute inset-0">
                <VideoPreview className="h-full w-full" />


          <Card className="md:col-span-1 p-6">
            <div className="h-full flex flex-col">
              {/* MEETING DETAILS  */}
              <div>
                <h2 className="text-xl font-semibold mb-1">Meeting Details</h2>
                <p className="text-sm text-muted-foreground break-all">{call.id}</p>

              <div className="flex-1 flex flex-col justify-between">
                <div className="spacey-6 mt-8">
                  {/* CAM CONTROL */}
                  <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {isCameraDisabled ? "Off" : "On"}
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={!isCameraDisabled}
                      onCheckedChange={(checked) => setIsCameraDisabled(!checked)}
// Added for testing-setup implementation
                  </div>

                  {/* MIC CONTROL */}
// Added for testing-setup implementation
                        <p className="font-medium">Microphone</p>
                          {isMicDisabled ? "Off" : "On"}
                    </div>
                      checked={!isMicDisabled}
                      onCheckedChange={(checked) => setIsMicDisabled(!checked)}
                    />
                  </div>

                  {/* DEVICE SETTINGS */}
                  <div className="flex items-center justify-between"> // Modified for testing-setup
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <p className="font-medium">Settings</p>
                        <p className="text-sm text-muted-foreground">Configure devices</p>
                    </div>
                  </div>
                </div>

                {/* JOIN BTN */}
                <div className="space-y-3 mt-8">
                  <Button className="w-full" size="lg" onClick={handleJoin}>
// Added for testing-setup implementation
                  </p>
                </div>
              </div>
            </div> // Modified for testing-setup
      </div>
  );
}
export default MeetingSetup;
