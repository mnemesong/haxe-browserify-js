package browserifyJs;

import js.node.Buffer;
import js.node.fs.ReadStream;

/**
	Options for browserify
**/
typedef Opts = {
	?basedir : String,
	?noparse : Array<String>,
	?transform : Dynamic<Any>,
	?ignoreTransform : Dynamic<Any>,
	?plugins : Dynamic<Any>,
	?extensions : Array<String>,
	?paths : Array<String>,
	?commondir : Bool,
	?fullPaths : Bool,
	?builtins : Array<String>,
	?bundleExternal : Bool,
	?insertGlobals : Bool,
	?detectGlobals : Bool,
	?ignoreMissing : Bool,
	?debug : Bool,
	?standalone : String,
	?insertGlobalVars : Dynamic<Any>,
	?externalRequireName : String,
	?bare : Bool,
	?node : Bool,
}

/**
	Native browserify object
**/
@:jsRequire( 'browserify' )
private extern class BrowserifyNativeObject {

	@:selfCall
	public static function create( ... args : Any ) : BrowserifyNativeObject;

	public function add( ... args : Any ) : BrowserifyNativeObject;

	public function require( ... args : Any ) : BrowserifyNativeObject;

	public function bundle( ... args : Any ) : ReadStream;

	public function external( ... args : Any ) : BrowserifyNativeObject;

	public function ignore( ... args : Any ) : BrowserifyNativeObject;

	public function exclude( ... args : Any ) : BrowserifyNativeObject;

	public function transform( ... args : Any ) : BrowserifyNativeObject;

	public function plugin( ... args : Any ) : BrowserifyNativeObject;

	public function reset( ... args : Any ) : Void;

	public var pipeline : Any;

	public function on( ... args : Any ) : BrowserifyNativeObject;
}

/**
	Variant of input file
**/
enum InputFile {
	FilePath( filePaths : String );
	NodeFile( files : ReadStream );
}

/**
	Public class is static api and decorator for native class
**/
class Browserify {

	private var native : BrowserifyNativeObject;

	public var pipeline( get, null ) : Any;

	public function get_pipeline() : Any {
		return this.native.pipeline;
	}

	public function getNative() : BrowserifyNativeObject {
		return this.native;
	}

	public function new( native : BrowserifyNativeObject ) {
		this.native = native;
	}

	private static function collectFile( inputFile : InputFile ) : Any {
		switch inputFile {
			case FilePath( filePath ):
				return filePath;
			case NodeFile( nodeFile ):
				return nodeFile;
		}
	}

	public function add( files : Array<InputFile>, ?opts : Opts ) : Browserify {
		var args : Array<Any> = [];
		args.push( files.map( f -> Browserify.collectFile( f ) ) );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.add( ... args );
		return this;
	}

	public function require( file : InputFile, ?opts : Opts ) : Browserify {
		var args : Array<Any> = [];
		args.push( file );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.require( ... args );
		return this;
	}

	public function bundle( ?onBundle : ( err : Any, src : Buffer ) -> Any ) : ReadStream {
		var args : Array<Any> = [];
		if ( onBundle != null ) {
			args.push( onBundle );
		}
		return this.native.bundle( ... args );
	}

	public function external<T>( files : Array<String>, ?opts : T ) : Browserify {
		var args : Array<Any> = [];
		args.push( files );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.external( ... args );
		return this;
	}

	public function externalBundle( b : Browserify ) : Browserify {
		this.native = this.native.external( b.getNative() );
		return this;
	}

	public function ignore<T>( file : String, ?opts : T ) : Browserify {
		var args : Array<Any> = [];
		args.push( file );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.ignore( ... args );
		return this;
	}

	public function exclude<T>( file : String, ?opts : T ) : Browserify {
		var args : Array<Any> = [];
		args.push( file );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.exclude( ... args );
		return this;
	}

	public function transformByModule<T>( module : String, ?opts : T ) : Browserify {
		var args : Array<Any> = [];
		args.push( module );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.transform( ... args );
		return this;
	}

	public function transformByFunction<T>(
		f : ( file : String, ?opts : T ) -> ReadStream,
		?opts : T
	) : Browserify {
		var args : Array<Any> = [];
		args.push( f );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.transform( ... args );
		return this;
	}

	public function pluginModule<T>( module : String, ?opts : T ) : Browserify {
		var args : Array<Any> = [];
		args.push( module );
		if ( opts != null ) {
			args.push( opts );
		}
		this.native = this.native.plugin( ... args );
		return this;
	}

	public function pluginFunction<T>(
		f : ( b : Browserify, ?opts : T ) -> Any,
		?opts : T
	) : Browserify {
		var args : Array<Any> = [];
		args.push( f );
		if ( opts != null ) {
			args.push( ( b : BrowserifyNativeObject, ?opts : T ) -> {
				return f( new Browserify( b ), opts );
			} );
		}
		this.native = this.native.plugin( ... args );
		return this;
	}

	public function reset<T>( ?opts : T ) : Void {
		var args : Array<Any> = [];
		if ( opts != null ) {
			args.push( opts );
		}
		this.native.reset( ... args );
	}

	public function onFile(
		listener : ( file : String, id : String, parent : Any ) -> Any
	) : Browserify {
		var args : Array<Any> = [
			'file',
			listener
		];
		this.native = this.native.on( ... args );
		return this;
	}

	public function onPackage(
		listener : ( pkg : Any ) -> Any
	) : Browserify {
		var args : Array<Any> = [
			'package',
			listener
		];
		this.native = this.native.on( ... args );
		return this;
	}

	public function onBundle(
		listener : ( bundle : ReadStream ) -> Any
	) : Browserify {
		var args : Array<Any> = [
			'bundle',
			listener
		];
		this.native = this.native.on( ... args );
		return this;
	}

	public function onReset(
		listener : () -> Any
	) : Browserify {
		var args : Array<Any> = [
			'reset',
			listener
		];
		this.native = this.native.on( ... args );
		return this;
	}

	public function onTransform(
		listener : ( tr : ReadStream, file : String ) -> Any
	) : Browserify {
		var args : Array<Any> = [
			'transform',
			listener
		];
		this.native = this.native.on( ... args );
		return this;
	}

	/* Constructors: */
	/**
		Constructor with file definition on construct
	**/
	public static function browserifyFiles(
		?inputFiles : Array<InputFile>,
		?opts : Opts
	) : Browserify {
		var args : Array<Any> = [];
		if ( inputFiles != null ) {
			args.push( inputFiles.map( f -> Browserify.collectFile( f ) ) );
		}
		if ( opts != null ) {
			args.push( opts );
		}
		return new Browserify( BrowserifyNativeObject.create( ... args ) );
	}

	/**
		Constructor with only options definition on construct
	**/
	public static function browserify(
		?opts : Opts
	) : Browserify {
		var args : Array<Any> = [];
		if ( opts != null ) {
			args.push( opts );
		}
		return new Browserify( BrowserifyNativeObject.create( ... args ) );
	}
}
