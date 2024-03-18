(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var BrowserifyTest = function() { };
BrowserifyTest.__name__ = true;
BrowserifyTest.main = function() {
	var testFilePath = js_node_Path.resolve(module.path,"..","test.js");
	var b = browserifyJs_Browserify.browserifyFiles([browserifyJs_InputFile.FilePath(testFilePath)]);
	b.bundle(function(err,src) {
		var actual = err;
		var expected = null;
		if(actual != expected) {
			throw haxe_Exception.thrown("FAIL: values are not equal (expected: " + (expected == null ? "null" : Std.string(expected)) + ", actual: " + (actual == null ? "null" : Std.string(actual)) + ")");
		}
		var str = src.toString();
		console.log("hx/BrowserifyTest.hx:20:",str);
		if(str.indexOf("console.log(\"This is test file!\");") == -1) {
			throw haxe_Exception.thrown("FAIL: str.indexOf('console.log(\\\"This is test file!\\\");') != -1");
		}
		if(str.indexOf("const printGreeting = () => {") == -1) {
			throw haxe_Exception.thrown("FAIL: str.indexOf('const printGreeting = () => {') != -1");
		}
		console.log("hx/BrowserifyTest.hx:23:","success!");
		return str;
	});
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var browserifyJs__$Browserify_BrowserifyNativeObject = require("browserify");
var browserifyJs_InputFile = $hxEnums["browserifyJs.InputFile"] = { __ename__:true,__constructs__:null
	,FilePath: ($_=function(filePaths) { return {_hx_index:0,filePaths:filePaths,__enum__:"browserifyJs.InputFile",toString:$estr}; },$_._hx_name="FilePath",$_.__params__ = ["filePaths"],$_)
	,NodeFile: ($_=function(files) { return {_hx_index:1,files:files,__enum__:"browserifyJs.InputFile",toString:$estr}; },$_._hx_name="NodeFile",$_.__params__ = ["files"],$_)
};
browserifyJs_InputFile.__constructs__ = [browserifyJs_InputFile.FilePath,browserifyJs_InputFile.NodeFile];
var browserifyJs_Browserify = function(native) {
	this.native = native;
};
browserifyJs_Browserify.__name__ = true;
browserifyJs_Browserify.collectFile = function(inputFile) {
	switch(inputFile._hx_index) {
	case 0:
		var filePath = inputFile.filePaths;
		return filePath;
	case 1:
		var nodeFile = inputFile.files;
		return nodeFile;
	}
};
browserifyJs_Browserify.browserifyFiles = function(inputFiles,opts) {
	var args = [];
	if(inputFiles != null) {
		var result = new Array(inputFiles.length);
		var _g = 0;
		var _g1 = inputFiles.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = browserifyJs_Browserify.collectFile(inputFiles[i]);
		}
		args.push(result);
	}
	if(opts != null) {
		args.push(opts);
	}
	var this1 = args;
	return new browserifyJs_Browserify(browserifyJs__$Browserify_BrowserifyNativeObject.apply(null,this1));
};
browserifyJs_Browserify.browserify = function(opts) {
	var args = [];
	if(opts != null) {
		args.push(opts);
	}
	var this1 = args;
	return new browserifyJs_Browserify(browserifyJs__$Browserify_BrowserifyNativeObject.apply(null,this1));
};
browserifyJs_Browserify.prototype = {
	get_pipeline: function() {
		return this.native.pipeline;
	}
	,getNative: function() {
		return this.native;
	}
	,add: function(files,opts) {
		var args = [];
		var result = new Array(files.length);
		var _g = 0;
		var _g1 = files.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = browserifyJs_Browserify.collectFile(files[i]);
		}
		args.push(result);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.add.apply($_,this1));
		return this;
	}
	,require: function(file,opts) {
		var args = [];
		args.push(file);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.require.apply($_,this1));
		return this;
	}
	,bundle: function(onBundle) {
		var args = [];
		if(onBundle != null) {
			args.push(onBundle);
		}
		var this1 = args;
		return ($_=this.native,$_.bundle.apply($_,this1));
	}
	,external: function(files,opts) {
		var args = [];
		args.push(files);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.external.apply($_,this1));
		return this;
	}
	,externalBundle: function(b) {
		this.native = this.native.external(b.getNative());
		return this;
	}
	,ignore: function(file,opts) {
		var args = [];
		args.push(file);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.ignore.apply($_,this1));
		return this;
	}
	,exclude: function(file,opts) {
		var args = [];
		args.push(file);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.exclude.apply($_,this1));
		return this;
	}
	,transformByModule: function($module,opts) {
		var args = [];
		args.push($module);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.transform.apply($_,this1));
		return this;
	}
	,transformByFunction: function(f,opts) {
		var args = [];
		args.push(f);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.transform.apply($_,this1));
		return this;
	}
	,pluginModule: function($module,opts) {
		var args = [];
		args.push($module);
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		this.native = ($_=this.native,$_.plugin.apply($_,this1));
		return this;
	}
	,pluginFunction: function(f,opts) {
		var args = [];
		args.push(f);
		if(opts != null) {
			args.push(function(b,opts) {
				return f(new browserifyJs_Browserify(b),opts);
			});
		}
		var this1 = args;
		this.native = ($_=this.native,$_.plugin.apply($_,this1));
		return this;
	}
	,reset: function(opts) {
		var args = [];
		if(opts != null) {
			args.push(opts);
		}
		var this1 = args;
		($_=this.native,$_.reset.apply($_,this1));
	}
	,onFile: function(listener) {
		var args = ["file",listener];
		var this1 = args;
		this.native = ($_=this.native,$_.on.apply($_,this1));
		return this;
	}
	,onPackage: function(listener) {
		var args = ["package",listener];
		var this1 = args;
		this.native = ($_=this.native,$_.on.apply($_,this1));
		return this;
	}
	,onBundle: function(listener) {
		var args = ["bundle",listener];
		var this1 = args;
		this.native = ($_=this.native,$_.on.apply($_,this1));
		return this;
	}
	,onReset: function(listener) {
		var args = ["reset",listener];
		var this1 = args;
		this.native = ($_=this.native,$_.on.apply($_,this1));
		return this;
	}
	,onTransform: function(listener) {
		var args = ["transform",listener];
		var this1 = args;
		this.native = ($_=this.native,$_.on.apply($_,this1));
		return this;
	}
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	get_native: function() {
		return this.__nativeException;
	}
});
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
});
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_node_KeyValue = {};
js_node_KeyValue.get_key = function(this1) {
	return this1[0];
};
js_node_KeyValue.get_value = function(this1) {
	return this1[1];
};
var js_node_Path = require("path");
var js_node_stream_WritableNewOptionsAdapter = {};
js_node_stream_WritableNewOptionsAdapter.from = function(options) {
	if(!Object.prototype.hasOwnProperty.call(options,"final")) {
		Object.defineProperty(options,"final",{ get : function() {
			return options.final_;
		}});
	}
	return options;
};
var js_node_url_URLSearchParamsEntry = {};
js_node_url_URLSearchParamsEntry._new = function(name,value) {
	var this1 = [name,value];
	return this1;
};
js_node_url_URLSearchParamsEntry.get_name = function(this1) {
	return this1[0];
};
js_node_url_URLSearchParamsEntry.get_value = function(this1) {
	return this1[1];
};
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
BrowserifyTest.main();
})({});
