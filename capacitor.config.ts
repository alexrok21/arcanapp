import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.arcanapp.app',
  appName: 'Arcanapp',
  webDir: 'dist',
  android: {
    backgroundColor: '#000000',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#FF8f0a0a",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      imageName: "splash"
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_arcana',
      iconColor: '#FFFFFF'
    }
  }
}

export default config