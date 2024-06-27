/**
* This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
*
* Do not edit this file as changes may cause incorrect behavior and will be lost
* once the code is regenerated.
*
* @generated by codegen project: GeneratePropsJavaInterface.js
*/

package com.facebook.react.viewmanagers;

import android.view.View;

public interface AutoLayoutViewManagerInterface<T extends View> {
  void setHorizontal(T view, boolean value);
  void setScrollOffset(T view, double value);
  void setWindowSize(T view, double value);
  void setRenderAheadOffset(T view, double value);
  void setEnableInstrumentation(T view, boolean value);
  void setDisableAutoLayout(T view, boolean value);
}