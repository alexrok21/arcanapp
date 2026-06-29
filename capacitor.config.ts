import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.arcanapp.app",
  appName: "Arcanapp",
  webDir: "dist",
  android: {
    backgroundColor: "#000000",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
      backgroundColor: "#000000",
    },
    LocalNotifications: {
      smallIcon: "ic_stat_arcana",
      iconColor: "#FFFFFF",
    },
  },
};

export default config;
