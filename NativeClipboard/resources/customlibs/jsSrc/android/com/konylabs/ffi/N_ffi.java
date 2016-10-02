package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import org.srinath.clipboard.Copy2Clipboard;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_ffi extends JSLibrary {

 
 
	public static final String setTextToClipboard = "setTextToClipboard";
 
	String[] methods = { setTextToClipboard };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new Copy2Clipboard();
 return libs;
 }



	public N_ffi(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String input0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 input0 = (java.lang.String)params[0];
 }
 ret = this.setTextToClipboard( input0 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "ffi";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] setTextToClipboard( java.lang.String inputKey0 ){
 
		Object[] ret = null;
 org.srinath.clipboard.Copy2Clipboard.setTextToClipboard( inputKey0
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 


class Copy2Clipboard extends JSLibrary {

 
	String[] methods = { };

	public Object createInstance(final Object[] params) {
 return new org.srinath.clipboard.Copy2Clipboard(
 );
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "Copy2Clipboard";
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
}

};
