package com.ecolote;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.airbnb.android.react.lottie.LottiePackage;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.proyecto26.inappbrowser.RNInAppBrowserPackage;
import suraj.tiwari.reactnativefbads.FBAdsPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import org.reactnative.camera.RNCameraPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.thebylito.navigationbarcolor.NavigationBarColorPackage;
import com.reactnativecommunity.viewpager.RNCViewPagerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.horcrux.svg.SvgPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import java.util.Arrays;
import java.util.List;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.horcrux.svg.SvgPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.thebylito.navigationbarcolor.NavigationBarColorPackage;

public class MainApplication extends NavigationApplication {

  @Override
  protected ReactGateway createReactGateway() {
    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
    return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
        // eg. new VectorIconsPackage()
        new SplashScreenReactPackage(), new SvgPackage(), new LinearGradientPackage(), new VectorIconsPackage(),
        new OrientationPackage(), new RNGestureHandlerPackage(), new ReanimatedPackage(), new RNCViewPagerPackage(),
        new NavigationBarColorPackage(), new AsyncStoragePackage(), new NetInfoPackage(), new RNCameraPackage(),
        new RNGoogleSigninPackage(), new FBSDKPackage(), new FBAdsPackage(), new RNInAppBrowserPackage(), new RNAdMobPackage(), new LottiePackage());

  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
