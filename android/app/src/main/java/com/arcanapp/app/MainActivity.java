package com.arcanapp.app;

import android.os.Bundle;
import android.view.View;
import com.getcapacitor.BridgeActivity;

// Agregá estos imports
import androidx.core.splashscreen.SplashScreen;
import android.window.SplashScreenView;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // DEBE ir ANTES de super.onCreate() para suprimir la splash nativa de Android 12
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S) {
            SplashScreen splashScreen = SplashScreen.installSplashScreen(this);
            splashScreen.setKeepOnScreenCondition(() -> false); // ← la descarta inmediatamente
        }

        super.onCreate(savedInstanceState);

        // Fullscreen detrás de navigation bar
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        );
        getWindow().setNavigationBarColor(android.graphics.Color.BLACK);
    }
}