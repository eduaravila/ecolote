package com.ecolote;

import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

}
